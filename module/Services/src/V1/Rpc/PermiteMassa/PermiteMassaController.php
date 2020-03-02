<?php
namespace Services\V1\Rpc\PermiteMassa;

use Acl\Entity\Acao;
use Acl\Entity\Recurso;
use Cadastro\Entity\UsuarioPerfil;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query\Expr\Join;
use Zend\Mvc\Controller\AbstractActionController;

class PermiteMassaController extends AbstractActionController
{
    public function permiteMassaAction()
    {
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        $request = $this->getRequest();

        if($request->isPost()) {
            $data = json_decode(file_get_contents('php://input'), TRUE);

            $recursos_nomes = [];
            if ($data['recursos'] && !empty($data['recursos'])) {
                foreach ($data['recursos'] as $recurso) {
                    if (!empty($recurso['items'])) {
                        foreach ($recurso['items'] as $subrecurso) {
                            $recursos_nomes[] = $subrecurso['title'];
                        }
                    } else {
                        $recursos_nomes[] = $recurso['title'];
                    }
                }
            }

            /**
             * @var EntityManager $em
             * @var Acao $db_acao
             * @var UsuarioPerfil[] $db_usuario_perfis
             * @var Recurso[] $db_recursos
             */

            $db_acao = $em->getRepository('Acl\Entity\Acao')->findOneByNome($data['acao']);

            $alias = 'p';
            $tabela = 'Cadastro\Entity\Usuario';

            $alias_ij1 = 'pr';
            $tabela_ij1 = 'Cadastro\Entity\UsuarioPerfil';

            $alias_ij2 = 'r';
            $tabela_ij2 = 'Acl\Entity\Perfil';

            $alias_ij3 = 'c';
            $tabela_ij3 = 'Cadastro\Entity\Usuario';

            $qb = $em->createQueryBuilder();
            $qb->select(array(
                'pr.id, r.id as perfil_id, r.nome as perfil_nome, r.admin, c.id as clinica'
            ))
                ->from($tabela,$alias)
                ->innerJoin($tabela_ij1,$alias_ij1,JOIN::WITH, $qb->expr()->andx(
                    $qb->expr()->eq('p.id', 'pr.usuario')
                ))
                ->innerJoin($tabela_ij2,$alias_ij2,JOIN::WITH, $qb->expr()->andx(
                    $qb->expr()->eq('pr.perfil', 'r.id')
                ))
                ->leftJoin($tabela_ij3,$alias_ij3,JOIN::WITH, $qb->expr()->andx(
                    $qb->expr()->eq('c.id', 'p.clinica')
                ))
                ->where('p.id = ' . $data['usuario']);

            $db_usuario_perfis = $qb->getQuery()->getResult();

            $db_recursos        = $em->getRepository('Acl\Entity\Recurso')->buscaPorNomes($recursos_nomes);

            $privilegios = [];
            if(!empty($db_usuario_perfis))
            {
                foreach ($db_usuario_perfis as $db_usuario_perfil)
                {
                    $clinica_id = ($db_usuario_perfil['perfil_nome'] == 'Clínica') ? $data['usuario'] : $db_usuario_perfil['clinica'];

                    $privilegios_clonados = $em->getRepository('Acl\Entity\Privilegio')->findBy(array(
                        'perfil' => $db_usuario_perfil['perfil_id'],
                        'clinica' => $clinica_id
                    ));

                    if(!empty($db_recursos))
                    {
                        foreach ($db_recursos as $db_recurso)
                        {
                            if(empty($privilegios_clonados)){
                                $db_privilegio = $em->getRepository('Acl\Entity\Privilegio')->findOneBy(array(
                                    'acao' => $db_acao,
                                    'recurso' => $db_recurso,
                                    'perfil' => $db_usuario_perfil['perfil_id']
                                ));
                            }else{
                                $db_privilegio = $em->getRepository('Acl\Entity\Privilegio')->findOneBy(array(
                                    'acao' => $db_acao,
                                    'recurso' => $db_recurso,
                                    'perfil' => $db_usuario_perfil['perfil_id'],
                                    'clinica' => $clinica_id
                                ));
                            }

                            if($db_privilegio || $db_usuario_perfil['admin']){
                                $privilegios[$db_recurso['id']] = array(
                                    "recurso" => $db_recurso['nome'],
                                    "permite" => true
                                );
                            }else{
                                //Se esse recurso já for permitido continua
                                if(isset($privilegios[$db_recurso['id']]) && $privilegios[$db_recurso['id']]['permite']){
                                    continue;
                                }else{
                                    $privilegios[$db_recurso['id']] = array(
                                        "recurso" => $db_recurso['nome'],
                                        "permite" => false
                                    );
                                }

                            }
                        }
                    }
                }
            }

            $retorno = [];
            if(!empty($privilegios))
            {
                foreach ($privilegios as $privilegio){
                    $retorno[] = $privilegio;
                }
            }
            echo json_encode($retorno);
        }
        die;
    }
}
