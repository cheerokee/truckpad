<?php
namespace Endereco\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * DDD
 *
 * @ORM\Table(name="ddd")
 * @ORM\Entity
 */
class Ddd
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
     * @var string
     *
     * @ORM\Column(name="ddd", type="integer", nullable=false)
     */
    private $ddd;

    public function __construct(array $options = array())
    {
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
        return $this->getDdd();
    }

    /**
     * @return string
     */
    public function getDdd()
    {
        return $this->ddd;
    }

    /**
     * @param string $ddd
     */
    public function setDdd($ddd)
    {
        $this->ddd = $ddd;
    }
}

