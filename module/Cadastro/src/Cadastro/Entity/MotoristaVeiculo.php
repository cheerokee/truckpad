<?php
namespace Cadastro\Entity;

use Doctrine\ORM\Mapping as ORM;
use Zend\Stdlib\Hydrator;
/**
 * MotoristaVeiculo
 *
 * @ORM\Table(name="motorista_veiculo")
 * @ORM\Entity
 */
class MotoristaVeiculo
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
     * @ORM\Column(name="criado_em", type="datetime", nullable=false)
     */
    private $criado_em;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="atualizado_em", type="datetime", nullable=true)
     */
    private $atualizado_em;

    /**
     * @var \Transporte\Entity\Veiculo
     *
     * @ORM\ManyToOne(targetEntity="Transporte\Entity\Veiculo", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="veiculo_id", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $veiculo;

    /**
     * @var \Cadastro\Entity\Motorista
     *
     * @ORM\ManyToOne(targetEntity="Cadastro\Entity\Motorista", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="motorista_id", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $motorista;

    /**
     * @var boolean
     *
     * @ORM\Column(name="ativo", type="boolean", nullable=true)
     */
    private $ativo;

    /**
     * @var boolean
     *
     * @ORM\Column(name="carregado", type="boolean", nullable=true)
     */
    private $carregado;

    /**
     * @var boolean
     *
     * @ORM\Column(name="proprio", type="boolean", nullable=true)
     */
    private $proprio;

    public function __construct(array $options = array())
    {
        (new Hydrator\ClassMethods)->hydrate($options, $this);

        $this->criado_em = new \DateTime("now");
        $this->atualizado_em = new \DateTime("now");
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
        return $this->getMotorista() . ' - ' . $this->getVeiculo();
    }

    public function toArray()
    {
        return (new Hydrator\ClassMethods())->extract($this);
    }

    /**
     * @return \DateTime
     */
    public function getCriadoEm()
    {
        return $this->criado_em;
    }

    /**
     * @param \DateTime $criado_em
     */
    public function setCriadoEm($criado_em)
    {
        $this->criado_em = $criado_em;
    }

    /**
     * @return \DateTime
     */
    public function getAtualizadoEm()
    {
        return $this->atualizado_em;
    }

    /**
     * @param \DateTime $atualizado_em
     */
    public function setAtualizadoEm($atualizado_em)
    {
        $this->atualizado_em = $atualizado_em;
    }

    /**
     * @return \Transporte\Entity\Veiculo
     */
    public function getVeiculo()
    {
        return $this->veiculo;
    }

    /**
     * @param \Transporte\Entity\Veiculo $veiculo
     */
    public function setVeiculo($veiculo)
    {
        $this->veiculo = $veiculo;
    }

    /**
     * @return Motorista
     */
    public function getMotorista()
    {
        return $this->motorista;
    }

    /**
     * @param Motorista $motorista
     */
    public function setMotorista($motorista)
    {
        $this->motorista = $motorista;
    }

    /**
     * @return boolean
     */
    public function getAtivo()
    {
        return $this->ativo;
    }

    /**
     * @param boolean $ativo
     */
    public function setAtivo($ativo)
    {
        $this->ativo = $ativo;
    }

    /**
     * @return boolean
     */
    public function getCarregado()
    {
        return $this->carregado;
    }

    /**
     * @param boolean $carregado
     */
    public function setCarregado($carregado)
    {
        $this->carregado = $carregado;
    }

    /**
     * @return boolean
     */
    public function getProprio()
    {
        return $this->proprio;
    }

    /**
     * @param boolean $proprio
     */
    public function setProprio($proprio)
    {
        $this->proprio = $proprio;
    }
}

