<?php
namespace Services\V1\Rpc\Permite;

use Acl\Entity\Acao;
use Acl\Entity\Perfil;
use Acl\Entity\Possibilidade;
use Acl\Entity\Recurso;
use Cadastro\Entity\Usuario;
use Cadastro\Entity\UsuarioPerfil;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;

class PermiteController extends AbstractActionController
{
    public function permiteAction()
    {
        /**
         * @var EntityManager $em
         * @var Usuario $db_usuario
         * @var Recurso $db_recurso
         * @var Acao $db_acao
         * @var Possibilidade $db_possibilidade
         * @var UsuarioPerfil[] $db_usuario_perfis
         * @var Perfil[] $db_perfis
         */
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');

        $db_usuario = $em->getRepository('Cadastro\Entity\Usuario')->findOneById($_GET['usuario']);
        $db_recurso = $em->getRepository('Acl\Entity\Recurso')->findOneByNome($_GET['recurso']);

        if(!$db_recurso){
            $db_recurso = new Recurso();
            $db_recurso->setNome($_GET['recurso']);
            $em->persist($db_recurso);
            $em->flush();
        }

        $db_acao = $em->getRepository('Acl\Entity\Acao')->findOneByNome($_GET['acao']);
        if(!$db_acao){
            $db_acao = new Acao();
            $db_acao->setNome($_GET['acao']);
            $em->persist($db_acao);
            $em->flush();
        }

        $db_possibilidade = $em->getRepository('Acl\Entity\Possibilidade')->findOneBy(array(
            'recurso' => $db_recurso,
            'acao' => $db_acao
        ));

        if(!$db_possibilidade){
            $db_possibilidade = new Possibilidade();
            $db_possibilidade->setRecurso($db_recurso);
            $db_possibilidade->setAcao($db_acao);

            $em->persist($db_possibilidade);
            $em->flush();
        }

        $db_usuario_perfis = $em->getRepository('Cadastro\Entity\UsuarioPerfil')->findByUsuario($db_usuario);
        $db_perfis = [];
        if(!empty($db_usuario_perfis))
        {
            foreach($db_usuario_perfis as $db_usuario_perfil){
                $db_perfis[] = $db_usuario_perfil->getPerfil();
                if($db_usuario_perfil->getPerfil()->getAdmin()){
                    echo json_encode(array('result' => true));
                    die;
                }
            }
        }

        if(!empty($db_perfis))
        {
            foreach($db_perfis as $db_perfil)
            {

                $privilegios_clonados = $em->getRepository('Acl\Entity\Privilegio')->findBy(array(
                    'perfil' => $db_perfil,
                    'clinica' => ($db_perfil->getNome() == 'Clínica') ? $db_usuario->getId() : $db_usuario->getClinica()
                ));

                if(empty($privilegios_clonados)){ // Não possui privilégios clonados, isso quer dizer que o perfil logado está sujeito as regras definidas pelo super administrador
                    // A validação só está sendo feito no primeiro nível
                    $db_privilegio = $em->getRepository('Acl\Entity\Privilegio')->findOneBy(array(
                        'perfil' => $db_perfil,
                        'recurso' => $db_recurso,
                        'acao' => $db_acao
                    ));
                }else{
                    // A validação só está sendo feito no primeiro nível
                    $db_privilegio = $em->getRepository('Acl\Entity\Privilegio')->findOneBy(array(
                        'perfil' => $db_perfil,
                        'recurso' => $db_recurso,
                        'acao' => $db_acao,
                        'clinica' => ($db_perfil->getNome() == 'Clínica') ? $db_usuario->getId() : $db_usuario->getClinica()
                    ));
                }

                if($db_privilegio)
                {
                    echo json_encode(array('result' => true));
                    die;
                }
            }
        }

        echo json_encode(array('result' => false));
        die;
    }
}
