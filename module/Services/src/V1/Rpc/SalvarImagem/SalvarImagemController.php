<?php
namespace Services\V1\Rpc\SalvarImagem;

use Zend\Mvc\Controller\AbstractActionController;

class SalvarImagemController extends AbstractActionController
{
    public function salvarImagemAction()
    {
        $request = $this->getRequest();
        if($request->isPost()) {
            $post = json_decode(file_get_contents('php://input'), TRUE);

            list($type, $imageData) = explode(';', $post['image']);
            list(,$extension) = explode('/',$type);
            list(,$imageData)      = explode(',', $imageData);
            $fileName = uniqid().'.'.$extension;
            $imageData = base64_decode($imageData);

            if(file_put_contents('public/uploads/' . $fileName, $imageData))
            {
                echo json_encode(array('image' => '/uploads/' . $fileName));
                exit();
            }else{
                echo json_encode(array( 'image' => false ));
                exit();
            }
        }
    }
}
