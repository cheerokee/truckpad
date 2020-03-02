<?php
namespace Services\V1\Rpc\EnviarNotificacao;

use Cadastro\Entity\Usuario;
use Doctrine\ORM\EntityManager;
use Zend\Http\Request;
use Zend\Mvc\Controller\AbstractActionController;

class EnviarNotificacaoController extends AbstractActionController
{
    public function enviarNotificacaoAction()
    {
        /**
         * @var EntityManager $em
         * @var Request $request
         * @var Usuario $db_usuario
         * @var \Cadastro\Service\Usuario $service
         */
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        $request = $this->getRequest();
        if($request->isPost()) {
            $data = json_decode(file_get_contents('php://input'), TRUE);

            $service = $this->getServiceLocator()->get('Cadastro\Service\Usuario');
            $result = $service->sendNotificacao($data);

            echo json_encode($result);
        }
        die;
    }
}
