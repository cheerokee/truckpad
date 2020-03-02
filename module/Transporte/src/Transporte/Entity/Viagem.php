<?php
namespace Transporte\Entity;

use Doctrine\ORM\Mapping as ORM;
use Zend\Stdlib\Hydrator;
/**
 * Viagem
 *
 * @ORM\Table(name="viagem")
 * @ORM\Entity
 */
class Viagem
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
     * @var \Endereco\Entity\Endereco
     *
     * @ORM\ManyToOne(targetEntity="Endereco\Entity\Endereco", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="origem_id", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $origem;

    /**
     * @var \Endereco\Entity\Endereco
     *
     * @ORM\ManyToOne(targetEntity="Endereco\Entity\Endereco", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="destino_id", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $destino;

    /**
     * @var \Cadastro\Entity\MotoristaVeiculo
     *
     * @ORM\ManyToOne(targetEntity="Cadastro\Entity\MotoristaVeiculo", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="motorista_veiculo_id", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $motorista_veiculo;

    /**
     * @var integer
     * 0 - Aguardando, 1 - A Caminho, 2 - Finalizado, 3 - Cancelado
     * @ORM\Column(name="status", type="integer", nullable=true)
     */
    private $status;

    /**
     * @var boolean
     * 0 - A carregar, 1 - A Descarregar
     * @ORM\Column(name="operacao", type="boolean", nullable=true)
     */
    private $operacao;

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
        return $this->getOrigem() . ' > ' . $this->getDestino() . ' -> ' . $this->getStatusStr();
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
     * @return \Endereco\Entity\Endereco
     */
    public function getOrigem()
    {
        return $this->origem;
    }

    /**
     * @param \Endereco\Entity\Endereco $origem
     */
    public function setOrigem($origem)
    {
        $this->origem = $origem;
    }

    /**
     * @return \Endereco\Entity\Endereco
     */
    public function getDestino()
    {
        return $this->destino;
    }

    /**
     * @param \Endereco\Entity\Endereco $destino
     */
    public function setDestino($destino)
    {
        $this->destino = $destino;
    }

    /**
     * @return \Cadastro\Entity\MotoristaVeiculo
     */
    public function getMotoristaVeiculo()
    {
        return $this->motorista_veiculo;
    }

    /**
     * @param \Cadastro\Entity\MotoristaVeiculo $motorista_veiculo
     */
    public function setMotoristaVeiculo($motorista_veiculo)
    {
        $this->motorista_veiculo = $motorista_veiculo;
    }

    /**
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param int $status
     */
    public function setStatus($status)
    {
        $this->status = $status;
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
     * @return bool
     */
    public function isOperacao()
    {
        return $this->operacao;
    }

    public function getOperacao()
    {
        return $this->operacao;
    }

    public function getOperacaoStr()
    {
        return ($this->operacao) ? 'A Descarregar' : 'A Carregar';
    }

    /**
     * @param bool $operacao
     */
    public function setOperacao($operacao)
    {
        $this->operacao = $operacao;
    }
}

