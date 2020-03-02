<?php
namespace Acl\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Possibilidade
 *
 * @ORM\Table(name="possibilidade")
 * @ORM\Entity
 */
class Possibilidade
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

    public function __construct(array $options = array())
    {}

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
        return $this->getAcao() . '-' .$this->getRecurso();
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
}

