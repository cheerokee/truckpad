<?php
namespace Acl\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\Expr\Join;

class RecursoRepository extends EntityRepository
{
    public function buscaPorNomes($nomes){

        $alias = 'r';
        $tabela = 'Acl\Entity\Recurso';

        if(!empty($nomes)){
            foreach ($nomes as $k => $nome)
                $nomes[$k] = "'$nome'";
            $where = " r.nome IN (" . implode(',', $nomes) . ") ";
        }else
            $where = " 1=2 ";

        $qb = $this->getEntityManager()->createQueryBuilder();
        $qb->select(array(
            'r.id,r.nome'
        ))
            ->from($tabela,$alias)
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
