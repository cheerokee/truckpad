<?php
namespace Services\V1\Rpc\Viagem;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query\Expr\Join;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Paginator\Adapter\ArrayAdapter;
use Zend\Paginator\Paginator;

class ViagemController extends AbstractActionController
{
    public function viagemAction()
    {
    }

    public function carregadoAction() {

        $inicial_param = $this->params()->fromRoute('inicial',0);
        $final_param = $this->params()->fromRoute('final',0);
        $page_param = $this->params()->fromRoute('page',0);
        $order_by_param = $this->params()->fromRoute('order_by',0);

        /**
         * @var EntityManager $em
         */
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        $qb = $em->createQueryBuilder();
        $qb->select(array(
            'ls.data',
            "CONCAT(ve.placa,' - ',ve.modelo,' (',ma.nome,')') as veiculo",
            "c.nome as tipo_veiculo",
            "m.nome as motorista"
        ));

        $qb->from('Transporte\Entity\Viagem','v');

        $qb->innerJoin('Transporte\Entity\LogStatus','ls',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('ls.viagem','v.id')
        ));

        $qb->innerJoin('Cadastro\Entity\MotoristaVeiculo','mv',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('mv.id','v.motorista_veiculo')
        ));

        $qb->innerJoin('Cadastro\Entity\Motorista','m',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('m.id','mv.motorista')
        ));

        $qb->innerJoin('Transporte\Entity\Veiculo','ve',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('ve.id','mv.veiculo')
        ));

        $qb->innerJoin('Transporte\Entity\Categoria','c',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('c.id','ve.categoria')
        ));

        $qb->innerJoin('Transporte\Entity\Marca','ma',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('ma.id','ve.marca')
        ));

        $qb->where('v.operacao = 0 AND v.status = 2 AND ls.status = 2');

        if($inicial_param)
            $qb->andWhere("ls.data >= '$inicial_param'");

        if($final_param)
            $qb->andWhere("ls.data <= '$final_param'");

        $qb->groupBy('v.id');

        if($order_by_param)
            $qb->orderBy("ls.data",$order_by_param);

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

    public function viagemCategoriaAction() {

        $inicial_param = $this->params()->fromRoute('inicial',0);
        $final_param = $this->params()->fromRoute('final',0);
        $page_param = $this->params()->fromRoute('page',0);
        $order_by_param = $this->params()->fromRoute('order_by',0);

        /**
         * @var EntityManager $em
         */
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        $qb = $em->createQueryBuilder();
        $qb->select(array(
            "c.id as tipo",
            "c.nome as tipo_nome",
            "CONCAT(ve.placa,' - ',ve.modelo,' (',ma.nome,')') as veiculo",
            'v.id as viagem_id',
            "o.id as origem_id",
            "CONCAT(o.logradouro,', ',o.numero,' - ',o.bairro,', ',oc.nome,', ',oc.estado,', ',o.cep) as origem",
            "d.id as destino_id",
            "CONCAT(d.logradouro,', ',d.numero,' - ',d.bairro,', ',dc.nome,', ',dc.estado,', ',d.cep) as destino",
            "ls.data as data"
        ));

        $qb->from('Transporte\Entity\Viagem','v');

        $qb->innerJoin('Transporte\Entity\LogStatus','ls',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('ls.viagem','v.id')
        ));

        $qb->innerJoin('Endereco\Entity\Endereco','o',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('o.id','v.origem')
        ));

        $qb->innerJoin('Endereco\Entity\Cidade','oc',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('oc.id','o.cidade')
        ));

        $qb->innerJoin('Endereco\Entity\Endereco','d',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('d.id','v.destino')
        ));

        $qb->innerJoin('Endereco\Entity\Cidade','dc',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('dc.id','d.cidade')
        ));

        $qb->innerJoin('Cadastro\Entity\MotoristaVeiculo','mv',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('mv.id','v.motorista_veiculo')
        ));

        $qb->innerJoin('Transporte\Entity\Veiculo','ve',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('ve.id','mv.veiculo')
        ));

        $qb->innerJoin('Transporte\Entity\Categoria','c',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('c.id','ve.categoria')
        ));

        $qb->innerJoin('Transporte\Entity\Marca','ma',JOIN::WITH, $qb->expr()->andx(
            $qb->expr()->eq('ma.id','ve.marca')
        ));

        if($inicial_param)
            $qb->andWhere("ls.data >= '$inicial_param'");

        if($final_param)
            $qb->andWhere("ls.data <= '$final_param'");

        $qb->groupBy('v.id');

        $qb->orderBy("c.id","ASC");

        if($order_by_param)
            $qb->addOrderBy("ls.data",$order_by_param);

        $data = $qb->getQuery()->getResult();

        $list = [];
        $tipo_anterior = '';
        if(!empty($data))
        {
            foreach($data as $item)
            {
                $tipo = $item['tipo'];
                $tipo_nome = $item['tipo_nome'];
                unset($item['tipo'],$item['tipo_nome']);

                if($tipo_anterior != $tipo)
                {
                    $tipo_anterior = $tipo;

                    $list[$tipo] = [
                        "id" => $tipo,
                        "nome" => $tipo_nome,
                        "viagens" => [$item]
                    ];
                }

                $list[$tipo]["viagens"][] = $item;
            }
        }

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
