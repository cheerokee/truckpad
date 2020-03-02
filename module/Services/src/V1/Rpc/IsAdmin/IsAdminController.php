<?php
namespace Services\V1\Rpc\IsAdmin;

use Cadastro\Entity\Usuario;
use Cadastro\Entity\UsuarioPerfil;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;

class IsAdminController extends AbstractActionController
{
    public function isAdminAction()
    {
        $isAdmin = false;
        if(isset($_GET['usuario'])){
            /**
             * @var EntityManager $em
             * @var Usuario $db_usuario
             * @var UsuarioPerfil[] $db_usuario_perfis
             */
            $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
            $db_usuario = $em->getRepository('Cadastro\Entity\Usuario')->findOneById($_GET['usuario']);
            if($db_usuario){
                $db_usuario_perfis = $em->getRepository('Cadastro\Entity\UsuarioPerfil')->findByUsuario($db_usuario);

                if(!empty($db_usuario_perfis))
                {
                    foreach($db_usuario_perfis as $db_usuario_perfil)
                    {
                        if($db_usuario_perfil->getPerfil()->getAdmin())
                            $isAdmin = true;
                    }
                }
            }
        }

        echo json_encode(array( 'result' => $isAdmin ));
        die;
    }
}
