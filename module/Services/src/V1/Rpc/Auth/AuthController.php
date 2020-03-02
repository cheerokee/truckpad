<?php
namespace Services\V1\Rpc\Auth;


use Doctrine\ORM\EntityManager;
use Zend\Authentication\AuthenticationService;
use Zend\Authentication\Result;
use Zend\Authentication\Storage\Session as SessionStorage;
use Zend\Http\Request;
use Zend\Mvc\Controller\AbstractActionController;

use Cadastro\Entity\Usuario;
use Services\V1\Rpc\Auth\Adapter;

class AuthController extends AbstractActionController
{
    public function authAction()
    {
        /**
         * @var EntityManager $em
         * @var Request $request
         */
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        $request = $this->getRequest();

        if($request->isPost())
        {
            $data = json_decode( file_get_contents('php://input'), TRUE );

            /**
             * @var Result $result
             */
            $result = $this->autenticate($data);

            if($result->isValid()){
                /**
                 * @var Usuario $user
                 */
                $user = $em->getRepository('Cadastro\Entity\Usuario')->findOneById($result->getIdentity());

                if($user->getAtivo()){
                    echo json_encode(array(
                        'result' => true,
                        'usuario' => $user->toArray()
                    ));
                }else{
                    echo json_encode(array(
                        'result' => false,
                        'tipo' => 1,
                        'msg' => "Você está inativado, acesse sua caixa de entrada para ativar sua conta"
                    ));
                }
            }else{
                echo json_encode(array(
                   'result' => false,
                   'tipo' => 0,
                   'msg' => "Usuário e senha incorreto"
                ));
            }
            die;
        }
    }

    public function autenticate($data) {
        // Criando Storage para gravar sessão da autenticação
        $sessionStorage = new SessionStorage("Usuario");

        $auth = new AuthenticationService();
        $auth->setStorage($sessionStorage);//Definindo o SessionStorage para a auth

        /**
         * @var Adapter $authAdapter
         */
        $authAdapter = $this->getServiceLocator()->get('Services\V1\Rpc\Auth\Adapter');
        $authAdapter->setUsername($data['email']);
        $authAdapter->setPassword($data['senha']);

        /**
         * @var Result $result
         */
        return $authAdapter->authenticate();
    }
}
