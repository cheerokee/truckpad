<?php
namespace Transporte\Entity;

use Doctrine\ORM\Mapping as ORM;
use Zend\Stdlib\Hydrator;
/**
 * LogStatus
 *
 * @ORM\Table(name="log_status")
 * @ORM\Entity
 */
class LogStatus
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="data", type="datetime", nullable=true)
     */
    private $data;

    /**
     * @var \Transporte\Entity\Viagem
     *
     * @ORM\ManyToOne(targetEntity="Transporte\Entity\Viagem", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="viagem", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $viagem;

    /**
     * @var integer
     * 0 - Aguardando, 1 - A Caminho, 2 - Finalizado, 3 - Cancelado
     * @ORM\Column(name="status", type="integer", nullable=true)
     */
    private $status;

    public function __construct(array $options = array())
    {
        (new Hydrator\ClassMethods)->hydrate($options, $this);

        $this->data = new \DateTime("now");
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    public function __toString()
    {
        return $this->getDataStr().' - '.$this->getStatusStr();
    }

    public function toArray()
    {
        return (new Hydrator\ClassMethods())->extract($this);
    }

    /**
     * @return \DateTime
     */
    public function getData()
    {
        return $this->data;
    }

    public function getDataStr()
    {
        return ($this->data) ? $this->data->format('d/m/Y H:i:s') : null;
    }

    /**
     * @param \DateTime $data
     */
    public function setData($data)
    {
        $this->data = $data;
    }

    /**
     * @return Viagem
     */
    public function getViagem()
    {
        return $this->viagem;
    }

    /**
     * @param Viagem $viagem
     */
    public function setViagem($viagem)
    {
        $this->viagem = $viagem;
    }

    /**
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    public function getStatusStr()
    {
        $status = '';
        switch ($this->status)
        {
            case 0:
                $status = "Aguardando";
                break;
            case 1:
                $status = "A Caminho";
                break;
            case 2:
                $status = "Finalizado";
                break;
            case 3:
                $status = "Cancelado";
                break;
        }

        return $status;
    }

    /**
     * @param int $status
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }
}

