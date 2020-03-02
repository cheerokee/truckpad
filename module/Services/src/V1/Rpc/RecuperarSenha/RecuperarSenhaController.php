<?php
namespace Services\V1\Rpc\RecuperarSenha;

use Cadastro\Service\Usuario;
use Zend\Http\Request;
use Zend\Mvc\Controller\AbstractActionController;

class RecuperarSenhaController extends AbstractActionController
{
    public function recuperarSenhaAction()
    {
        /**
         * @var Request $request
         * @var Usuario $service
         */
        $request = $this->getRequest();
        if($request->isPost()) {
            $data = json_decode(file_get_contents('php://input'), TRUE);

            $service = $this->getServiceLocator()->get('Cadastro\Service\Usuario');
            $result = $service->lostPassword($data);

            echo json_encode($result);
        }
        die;
    }
}
