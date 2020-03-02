<?php
namespace Cadastro\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\Expr\Join;

class UsuarioRepository extends EntityRepository
{
    public function buscarPorPerfil($name,$like = '',$clinica = ''){

        $alias = 'p';
        $tabela = 'Cadastro\Entity\Usuario';

        $alias_ij1 = 'pr';
        $tabela_ij1 = 'Cadastro\Entity\UsuarioPerfil';

        $alias_ij2 = 'r';
        $tabela_ij2 = 'Acl\Entity\Perfil';

        $where = "r.nome LIKE '%".$name."%'";
        if($like != ''){
            $where .= " AND p.nome LIKE '%".$like."%' OR p.documento LIKE '%".$like."%'";
        }

        if($clinica != ''){
            $where .= " AND p.clinica = $clinica";
        }

        $qb = $this->getEntityManager()->createQueryBuilder();
        $qb->select(array(
            $alias
        ))
            ->from($tabela,$alias)
            ->innerJoin($tabela_ij1,$alias_ij1,JOIN::WITH, $qb->expr()->andx(
                $qb->expr()->eq('p.id', 'pr.usuario')
            ))
            ->innerJoin($tabela_ij2,$alias_ij2,JOIN::WITH, $qb->expr()->andx(
                $qb->expr()->eq('pr.perfil', 'r.id')
            ))
            ->where($where);

        if(!empty($qb->getQuery()->getResult())){
            return $qb->getQuery()->getResult();
        }else{
            return array();
        }
    }
    
    public function findByEmailAndPassword($email, $password)
    {
        /**
         * @var Usuario $user
         */
        $user = $this->findOneBy(array(
            'email'     =>  $email
        ));
        
        if($user)
        {
            $hashSenha = $user->encryptPassword($password);
            if($hashSenha == $user->getSenha())
                return $user;
            else
                return false;
        }
        else
            return false;
    }

    public function isAuthActive($email)
    {
        $user = $this->findOneBy(array(
            'email'     =>  $email,
            'ativo'    =>  1
        ));

        if($user)
        {
            return true;
        }
        else
            return false;
    }
}
