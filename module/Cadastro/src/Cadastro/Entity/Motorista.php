<?php
namespace Cadastro\Entity;

use Doctrine\ORM\Mapping as ORM;
use Zend\Stdlib\Hydrator;
/**
 * Motorista
 *
 * @ORM\Table(name="motorista")
 * @ORM\Entity
 */
class Motorista
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
     * @var string
     *
     * @ORM\Column(name="nome", type="string", length=255, nullable=false)
     */
    private $nome;

    /**
     * @var string
     *
     * @ORM\Column(name="telefone", type="string", length=20, nullable=false)
     */
    private $telefone;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="data_nascimento", type="datetime", nullable=false)
     */
    private $data_nascimento;

    /**
     * @var string
     *
     * @ORM\Column(name="idade", type="integer", nullable=true)
     */
    private $idade;

    /**
     * @var string
     *
     * @ORM\Column(name="cnh", type="string", length=255, nullable=false)
     */
    private $cnh;

    /**
     * @var string
     *
     * @ORM\Column(name="tipo_cnh", type="string", length=3, nullable=false)
     */
    private $tipo_cnh;

    /**
     * @var string
     *
     * @ORM\Column(name="cpf", type="string", length=20, nullable=false)
     */
    private $cpf;

    /**
     * @var boolean
     *
     * @ORM\Column(name="ativo", type="boolean", nullable=true)
     */
    private $ativo;

    /**
     * @var boolean
     *
     * @ORM\Column(name="sexo", type="boolean", nullable=true)
     */
    private $sexo;

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
        return $this->getNome();
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
     * @return string
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * @param string $nome
     */
    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    /**
     * @return string
     */
    public function getIdade()
    {
        return $this->idade;
    }

    /**
     * @param string $idade
     */
    public function setIdade($idade)
    {
        $this->idade = $idade;
    }

    /**
     * @return string
     */
    public function getTelefone()
    {
        return $this->telefone;
    }

    /**
     * @param string $telefone
     */
    public function setTelefone($telefone)
    {
        $this->telefone = $telefone;
    }

    /**
     * @return \DateTime
     */
    public function getDataNascimento()
    {
        return $this->data_nascimento;
    }

    /**
     * @param \DateTime $data_nascimento
     */
    public function setDataNascimento($data_nascimento)
    {
        $this->data_nascimento = $data_nascimento;
    }

    /**
     * @return string
     */
    public function getCnh()
    {
        return $this->cnh;
    }

    /**
     * @param string $cnh
     */
    public function setCnh($cnh)
    {
        $this->cnh = $cnh;
    }

    /**
     * @return string
     */
    public function getTipoCnh()
    {
        return $this->tipo_cnh;
    }

    /**
     * @param string $tipo_cnh
     */
    public function setTipoCnh($tipo_cnh)
    {
        $this->tipo_cnh = $tipo_cnh;
    }

    /**
     * @return string
     */
    public function getCpf()
    {
        return $this->cpf;
    }

    /**
     * @param string $cpf
     */
    public function setCpf($cpf)
    {
        $this->cpf = $cpf;
    }

    /**
     * @return bool
     */
    public function isAtivo()
    {
        return $this->ativo;
    }

    public function getAtivo()
    {
        return $this->ativo;
    }

    public function getAtivoStr()
    {
        return ($this->ativo) ? 'Sim' : 'Não';
    }

    /**
     * @param bool $ativo
     */
    public function setAtivo($ativo)
    {
        $this->ativo = $ativo;
    }

    /**
     * @return bool
     */
    public function isSexo()
    {
        return $this->sexo;
    }

    /**
     * @param bool $sexo
     */
    public function setSexo($sexo)
    {
        $this->sexo = $sexo;
    }
}

