<?php
namespace Services\V1\Rpc\SemCarga;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query\Expr\Join;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Paginator\Adapter\ArrayAdapter;
use Zend\Paginator\Paginator;

class SemCargaController extends AbstractActionController
{
    public function semCargaAction()
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
            'm.id as motorista_id',
            'm.nome as motorista_nome',
            "ve.id as veiculo_id",
            "ve.placa as veiculo_placa",
            "v.id as viagem_id"
        ));

        $qb->from('Cadastro\Entity\Motorista','m');
        // Mandante
        $qb->innerJoin('Cadastro\Entity\MotoristaVeiculo','mv',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('mv.motorista','m.id')
        ));

        $qb->innerJoin('Transporte\Entity\Veiculo','ve',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('ve.id','mv.veiculo')
        ));

        $qb->innerJoin('Transporte\Entity\Viagem','v',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('v.motorista_veiculo','mv.id')
        ));

        $qb->innerJoin('Endereco\Entity\Endereco','e',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('e.id','v.origem'),
            $qb->expr()->isNull('e.motorista')
        ));

        $qb->innerJoin('Endereco\Entity\Endereco','d',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('d.id','v.destino')
        ));

        $qb->where('v.status = 0');

        if($motorista_param)
            $qb->andWhere("m.id = $motorista_param");
        if($order_by_param)
            $qb->orderBy("v.criado_em ",$order_by_param);

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
