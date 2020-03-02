<?php
namespace Services\V1\Rpc\SalvarSlug;

use Cadastro\Entity\Usuario;
use Doctrine\ORM\EntityManager;
use mysql_xdevapi\Exception;
use Zend\Http\Request;
use Zend\Mvc\Controller\AbstractActionController;

class SalvarSlugController extends AbstractActionController
{
    public function salvarSlugAction()
    {
        $em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        $request = $this->getRequest();
        if($request->isPost()) {
            $data = json_decode(file_get_contents('php://input'), TRUE);

            if(!isset($data['id']) || !isset($data['field']) || !isset($data['entity']))
            {
                throw new \Exception('Um dos importantes parâmetros não foi encontrado');
            }

            // Código do registro que queremos salvar o slug
            $id     = $data['id'];

            // Nome do campo que queremos transformar em slug
            $field  = 'get' . $this->toCamelCase($data['field'],true);

            // A entidade que queremos trabalhar
            $entity = $data['entity'];

            $db_entity = $em
                ->getRepository($entity)
                ->findOneById($id);

            if($db_entity){
                $string = $this->slugify($db_entity->$field());

                $qb = $em->createQueryBuilder();
                $qb->select(array('x'))
                    ->from('Cadastro\Entity\Usuario','x')
                    ->where("x.slug LIKE '$string%'");

                if(!empty($qb->getQuery()->getResult())){
                    $count = count($qb->getQuery()->getResult())+1;
                    $newSlug = $string.'-'.$count;

                    while($em->getRepository($entity)->findOneBySlug($newSlug)){
                        $newSlug = $string.'-'.($count + 1);
                    }

                    $db_entity->setSlug($newSlug);
                }else{
                    $db_entity->setSlug($string);
                }

                $em->persist($db_entity);
                $em->flush();
            }else{
                throw new \Exception('Entidade não foi encontrada');
            }

            echo json_encode(array('result' => true));
        }
        die;
    }

    function slugify($string) {
        $string = preg_replace('/[\t\n]/', ' ', $string);
        $string = preg_replace('/\s{2,}/', ' ', $string);
        $list = array(
            'Š' => 'S',
            'š' => 's',
            'Đ' => 'Dj',
            'đ' => 'dj',
            'Ž' => 'Z',
            'ž' => 'z',
            'Č' => 'C',
            'č' => 'c',
            'Ć' => 'C',
            'ć' => 'c',
            'À' => 'A',
            'Á' => 'A',
            'Â' => 'A',
            'Ã' => 'A',
            'Ä' => 'A',
            'Å' => 'A',
            'Æ' => 'A',
            'Ç' => 'C',
            'È' => 'E',
            'É' => 'E',
            'Ê' => 'E',
            'Ë' => 'E',
            'Ì' => 'I',
            'Í' => 'I',
            'Î' => 'I',
            'Ï' => 'I',
            'Ñ' => 'N',
            'Ò' => 'O',
            'Ó' => 'O',
            'Ô' => 'O',
            'Õ' => 'O',
            'Ö' => 'O',
            'Ø' => 'O',
            'Ù' => 'U',
            'Ú' => 'U',
            'Û' => 'U',
            'Ü' => 'U',
            'Ý' => 'Y',
            'Þ' => 'B',
            'ß' => 'Ss',
            'à' => 'a',
            'á' => 'a',
            'â' => 'a',
            'ã' => 'a',
            'ä' => 'a',
            'å' => 'a',
            'æ' => 'a',
            'ç' => 'c',
            'è' => 'e',
            'é' => 'e',
            'ê' => 'e',
            'ë' => 'e',
            'ì' => 'i',
            'í' => 'i',
            'î' => 'i',
            'ï' => 'i',
            'ð' => 'o',
            'ñ' => 'n',
            'ò' => 'o',
            'ó' => 'o',
            'ô' => 'o',
            'õ' => 'o',
            'ö' => 'o',
            'ø' => 'o',
            'ù' => 'u',
            'ú' => 'u',
            'û' => 'u',
            'ý' => 'y',
            'ý' => 'y',
            'þ' => 'b',
            'ÿ' => 'y',
            'Ŕ' => 'R',
            'ŕ' => 'r',
            '/' => '-',
            ' ' => '-',
            '.' => '-',
        );

        $string = strtr($string, $list);
        $string = preg_replace('/-{2,}/', '-', $string);
        $string = strtolower($string);

        return $string;
    }

    function toCamelCase($string, $capitalizeFirstCharacter = false)
    {

        $str = str_replace(' ', '', ucwords(str_replace('_',' ',str_replace('-', ' ', $string))));

        if (!$capitalizeFirstCharacter) {
            $str[0] = strtolower($str[0]);
        }

        return $str;
    }
}
