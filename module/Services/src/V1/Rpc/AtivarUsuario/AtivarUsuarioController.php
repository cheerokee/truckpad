<?php
namespace Services\V1\Rpc\AtivarUsuario;

use Cadastro\Entity\Usuario;
use Doctrine\ORM\EntityManager;
use Zend\Http\Request;
use Zend\Mvc\Controller\AbstractActionController;

class AtivarUsuarioController extends AbstractActionController
{
    public function ativarUsuarioAction()
    {
        /**
         * @var EntityManager $em
         * @var Usuario $db_usuario
         */
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        $key = $_REQUEST['key'];

        $db_usuario = $em
            ->getRepository('Cadastro\Entity\Usuario')
            ->findOneBy(array(
                'activation_key' => $key
            ));

        $db_usuario->setAtivo(1);
        $em->persist($db_usuario);
        $em->flush();

        header('Location: http://localhost:4200?confirmado=true');
        die;

        var_dump($db_usuario);
        die;
    }
}
