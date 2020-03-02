<?php

namespace DoctrineORMModule\Proxy\__CG__\Equipment\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Equipment extends \Equipment\Entity\Equipment implements \Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'id', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'name', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'image', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'category', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'life_time', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'value', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'depreciation', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'date_aquisition', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'updatedAt', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'createdAt'];
        }

        return ['__isInitialized__', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'id', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'name', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'image', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'category', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'life_time', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'value', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'depreciation', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'date_aquisition', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'updatedAt', '' . "\0" . 'Equipment\\Entity\\Equipment' . "\0" . 'createdAt'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Equipment $proxy) {
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
    public function getUpdatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUpdatedAt', []);

        return parent::getUpdatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setUpdatedAt($updatedAt)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUpdatedAt', [$updatedAt]);

        return parent::setUpdatedAt($updatedAt);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreatedAt', []);

        return parent::getCreatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreatedAt($createdAt)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreatedAt', [$createdAt]);

        return parent::setCreatedAt($createdAt);
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
    public function getName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getName', []);

        return parent::getName();
    }

    /**
     * {@inheritDoc}
     */
    public function setName($name)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setName', [$name]);

        return parent::setName($name);
    }

    /**
     * {@inheritDoc}
     */
    public function getCategory()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCategory', []);

        return parent::getCategory();
    }

    /**
     * {@inheritDoc}
     */
    public function setCategory($category)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCategory', [$category]);

        return parent::setCategory($category);
    }

    /**
     * {@inheritDoc}
     */
    public function getLifeTime()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLifeTime', []);

        return parent::getLifeTime();
    }

    /**
     * {@inheritDoc}
     */
    public function setLifeTime($life_time)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLifeTime', [$life_time]);

        return parent::setLifeTime($life_time);
    }

    /**
     * {@inheritDoc}
     */
    public function getValue()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getValue', []);

        return parent::getValue();
    }

    /**
     * {@inheritDoc}
     */
    public function getValueStr()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getValueStr', []);

        return parent::getValueStr();
    }

    /**
     * {@inheritDoc}
     */
    public function setValue($value)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setValue', [$value]);

        return parent::setValue($value);
    }

    /**
     * {@inheritDoc}
     */
    public function getDepreciation()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDepreciation', []);

        return parent::getDepreciation();
    }

    /**
     * {@inheritDoc}
     */
    public function setDepreciation($depreciation)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDepreciation', [$depreciation]);

        return parent::setDepreciation($depreciation);
    }

    /**
     * {@inheritDoc}
     */
    public function getDateAquisition()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDateAquisition', []);

        return parent::getDateAquisition();
    }

    /**
     * {@inheritDoc}
     */
    public function getDateAquisitionStr()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDateAquisitionStr', []);

        return parent::getDateAquisitionStr();
    }

    /**
     * {@inheritDoc}
     */
    public function setDateAquisition($date_aquisition)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDateAquisition', [$date_aquisition]);

        return parent::setDateAquisition($date_aquisition);
    }

    /**
     * {@inheritDoc}
     */
    public function getImage()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getImage', []);

        return parent::getImage();
    }

    /**
     * {@inheritDoc}
     */
    public function setImage($image)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setImage', [$image]);

        return parent::setImage($image);
    }

}