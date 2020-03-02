<?php
namespace Services\V1\Rpc\Privilegio;

use Acl\Entity\Privilegio;
use Cadastro\Entity\Usuario;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Paginator\Adapter\ArrayAdapter;
use Zend\Paginator\Paginator;

class PrivilegioController extends AbstractActionController
{
    public function privilegioAction()
    {
        /**
         * @var EntityManager $em
         */
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');

        $list = [];
        if(isset($_GET['perfil']) && isset($_GET['acao']) && isset($_GET['recurso']))
        {
            $list = $em->getRepository('Acl\Entity\Privilegio')->findBy(array(
                "perfil" => $_GET['perfil'],
                "acao" => $_GET['acao'],
                "recurso" => $_GET['recurso'],
                "clinica" => (isset($_GET['clinica']) && $_GET['clinica'] != '') ? $_GET['clinica'] : null
            ));
        }

        $page = (isset($_GET['page'])) ? $_GET['page'] : 1;
        $page_size = 25;
        $page_count = ceil(count($list) / $page_size);
        $total_items = count($list);

        /**
         * @var Usuario[] $db_clinicas
         */
        $db_privilegios = new Paginator(new ArrayAdapter($list));
        $db_privilegios->setCurrentPageNumber($page)->setDefaultItemCountPerPage($page_size);

        $privilegios = [];
        if(!empty($db_privilegios)){
            /**
             * @var Privilegio[] $db_privilegios
             */
            foreach ($db_privilegios as $db_privilegio)
            {
                $privilegios[] = array(
                    'id' => $db_privilegio->getId(),
                    '_embedded' => array(
                        'perfil' => array(
                            'id' => $db_privilegio->getPerfil()->getId(),
                            'nome' => $db_privilegio->getPerfil()->getNome(),
                            'admin' => $db_privilegio->getPerfil()->getAdmin()
                        ),
                        'recurso' => array(
                            'id' => $db_privilegio->getRecurso()->getId(),
                            'nome' => $db_privilegio->getRecurso()->getNome()
                        ),
                        'acao' => array(
                            'id' => $db_privilegio->getAcao()->getId(),
                            'nome' => $db_privilegio->getAcao()->getNome()
                        ),
                    )
                );
            }
        }

        echo json_encode(array(
            "_embedded" => array( "privilegio" => $privilegios ),
            "page" => $page,
            "page_count" => $page_count,
            "total_items" => $total_items
        ));
        die;
    }
}
