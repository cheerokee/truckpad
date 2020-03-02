<?php
namespace Acl\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Privilegio
 *
 * @ORM\Table(name="privilegio")
 * @ORM\Entity
 */
class Privilegio
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
     * @var \Acl\Entity\Acao
     *
     * @ORM\ManyToOne(targetEntity="Acl\Entity\Acao", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="acao_id", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $acao;

    /**
     * @var \Acl\Entity\Recurso
     *
     * @ORM\ManyToOne(targetEntity="Acl\Entity\Recurso", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="recurso_id", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $recurso;

    /**
     * @var \Acl\Entity\Perfil
     *
     * @ORM\ManyToOne(targetEntity="Acl\Entity\Perfil", fetch="LAZY")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="perfil_id", referencedColumnName="id",
     *      nullable=false,
     *      onDelete="CASCADE")
     * })
     */
    private $perfil;

    public function __construct(array $options = array())
    {
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

    public function __toString()
    {
        return $this->getPerfil() . '-' . $this->getAcao() . '-' . $this->getRecurso();
    }

    /**
     * @return Acao
     */
    public function getAcao()
    {
        return $this->acao;
    }

    /**
     * @param Acao $acao
     */
    public function setAcao($acao)
    {
        $this->acao = $acao;
    }

    /**
     * @return Recurso
     */
    public function getRecurso()
    {
        return $this->recurso;
    }

    /**
     * @param Recurso $recurso
     */
    public function setRecurso($recurso)
    {
        $this->recurso = $recurso;
    }

    /**
     * @return Perfil
     */
    public function getPerfil()
    {
        return $this->perfil;
    }

    /**
     * @param Perfil $perfil
     */
    public function setPerfil($perfil)
    {
        $this->perfil = $perfil;
    }
}

