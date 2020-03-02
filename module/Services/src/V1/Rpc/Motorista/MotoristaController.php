<?php
namespace Services\V1\Rpc\Motorista;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query\Expr\Join;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Paginator\Adapter\ArrayAdapter;
use Zend\Paginator\Paginator;

class MotoristaController extends AbstractActionController
{
    public function motoristaAction()
    {
    }

    public function veiculoProprioAction()
    {
        $motorista_param = $this->params()->fromRoute('motorista',0);
        $page_param = $this->params()->fromRoute('page',0);
        $order_by_param = $this->params()->fromRoute('order_by',0);

        /**
         * @var EntityManager $em
         */
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        $qb = $em->createQueryBuilder();
        $qb->select(array(
            'c.nome as tipo_veiculo',
            "CONCAT(v.placa,' - ',v.modelo,' (',ma.nome,')') as veiculo",
            "m.nome as motorista"
        ));

        $qb->from('Cadastro\Entity\MotoristaVeiculo','mv');

        $qb->innerJoin('Cadastro\Entity\Motorista','m',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('m.id','mv.motorista')
        ));

        $qb->innerJoin('Transporte\Entity\Veiculo','v',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('v.id','mv.veiculo')
        ));

        $qb->innerJoin('Transporte\Entity\Categoria','c',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('c.id','v.categoria')
        ));

        $qb->innerJoin('Transporte\Entity\Marca','ma',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('ma.id','v.marca')
        ));

        $qb->where('mv.proprio = 1');

        if($motorista_param)
            $qb->andWhere("m.id >= '$motorista_param'");

        $list = $qb->getQuery()->getResult();

        $count = count($list);

        $page = ($page_param) ? $page_param : 1;

        $por_pagina = 20;
        $total_paginas = ($count > 0) ? ceil($count / $por_pagina) : 1;

        $db_expedients = new Paginator(new ArrayAdapter($list));
        $db_expedients->setCurrentPageNumber($page)->setDefaultItemCountPerPage($por_pagina);

        $list = [];
        if(!empty($db_expedients)){
            foreach ($db_expedients as $db_expedient){
                $list[] = $db_expedient;
            }
        }

        $return = array(
            '_embedded' => [ "data" => $list ],
            'page' => $page,
            'page_count' => $total_paginas,
            'page_size' => $por_pagina,
            'total_items' => $count
        );

        echo json_encode($return);
        die;
    }
}
