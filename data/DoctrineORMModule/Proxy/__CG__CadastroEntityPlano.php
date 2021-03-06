<?php

namespace DoctrineORMModule\Proxy\__CG__\Cadastro\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Plano extends \Cadastro\Entity\Plano implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Persistence\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = [];



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'id', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'nome', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'adicional', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'percentual_adicional', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'minutos', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'minutos_gratis', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'ativo'];
        }

        return ['__isInitialized__', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'id', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'nome', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'adicional', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'percentual_adicional', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'minutos', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'minutos_gratis', '' . "\0" . 'Cadastro\\Entity\\Plano' . "\0" . 'ativo'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Plano $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function setId($id)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setId', [$id]);

        return parent::setId($id);
    }

    /**
     * {@inheritDoc}
     */
    public function __toString()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, '__toString', []);

        return parent::__toString();
    }

    /**
     * {@inheritDoc}
     */
    public function toArray()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'toArray', []);

        return parent::toArray();
    }

    /**
     * {@inheritDoc}
     */
    public function getNome()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNome', []);

        return parent::getNome();
    }

    /**
     * {@inheritDoc}
     */
    public function setNome($nome)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNome', [$nome]);

        return parent::setNome($nome);
    }

    /**
     * {@inheritDoc}
     */
    public function isAdicional()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isAdicional', []);

        return parent::isAdicional();
    }

    /**
     * {@inheritDoc}
     */
    public function setAdicional($adicional)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAdicional', [$adicional]);

        return parent::setAdicional($adicional);
    }

    /**
     * {@inheritDoc}
     */
    public function getPercentualAdicional()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPercentualAdicional', []);

        return parent::getPercentualAdicional();
    }

    /**
     * {@inheritDoc}
     */
    public function setPercentualAdicional($percentual_adicional)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPercentualAdicional', [$percentual_adicional]);

        return parent::setPercentualAdicional($percentual_adicional);
    }

    /**
     * {@inheritDoc}
     */
    public function getMinutos()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getMinutos', []);

        return parent::getMinutos();
    }

    /**
     * {@inheritDoc}
     */
    public function setMinutos($minutos)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMinutos', [$minutos]);

        return parent::setMinutos($minutos);
    }

    /**
     * {@inheritDoc}
     */
    public function getMinutosGratis()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getMinutosGratis', []);

        return parent::getMinutosGratis();
    }

    /**
     * {@inheritDoc}
     */
    public function setMinutosGratis($minutos_gratis)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMinutosGratis', [$minutos_gratis]);

        return parent::setMinutosGratis($minutos_gratis);
    }

    /**
     * {@inheritDoc}
     */
    public function isAtivo()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isAtivo', []);

        return parent::isAtivo();
    }

    /**
     * {@inheritDoc}
     */
    public function getAtivo()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAtivo', []);

        return parent::getAtivo();
    }

    /**
     * {@inheritDoc}
     */
    public function getAtivoStr()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAtivoStr', []);

        return parent::getAtivoStr();
    }

    /**
     * {@inheritDoc}
     */
    public function setAtivo($ativo)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAtivo', [$ativo]);

        return parent::setAtivo($ativo);
    }

}
