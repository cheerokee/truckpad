<?php

namespace DoctrineORMModule\Proxy\__CG__\Account\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Account extends \Account\Entity\Account implements \Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'id', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'bank', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'user', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'holder', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'agency', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'account_number', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'type', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'operation', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'type_account', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'cnpj', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'updated_at', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'created_at'];
        }

        return ['__isInitialized__', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'id', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'bank', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'user', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'holder', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'agency', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'account_number', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'type', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'operation', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'type_account', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'cnpj', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'updated_at', '' . "\0" . 'Account\\Entity\\Account' . "\0" . 'created_at'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Account $proxy) {
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
    public function setUpdatedAt($updated_at)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUpdatedAt', [$updated_at]);

        return parent::setUpdatedAt($updated_at);
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
    public function setCreatedAt($created_at)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreatedAt', [$created_at]);

        return parent::setCreatedAt($created_at);
    }

    /**
     * {@inheritDoc}
     */
    public function getBank()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getBank', []);

        return parent::getBank();
    }

    /**
     * {@inheritDoc}
     */
    public function setBank($bank)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setBank', [$bank]);

        return parent::setBank($bank);
    }

    /**
     * {@inheritDoc}
     */
    public function getUser()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUser', []);

        return parent::getUser();
    }

    /**
     * {@inheritDoc}
     */
    public function setUser($user)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUser', [$user]);

        return parent::setUser($user);
    }

    /**
     * {@inheritDoc}
     */
    public function getHolder()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getHolder', []);

        return parent::getHolder();
    }

    /**
     * {@inheritDoc}
     */
    public function setHolder($holder)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setHolder', [$holder]);

        return parent::setHolder($holder);
    }

    /**
     * {@inheritDoc}
     */
    public function getAgency()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAgency', []);

        return parent::getAgency();
    }

    /**
     * {@inheritDoc}
     */
    public function setAgency($agency)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAgency', [$agency]);

        return parent::setAgency($agency);
    }

    /**
     * {@inheritDoc}
     */
    public function getAccountNumber()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAccountNumber', []);

        return parent::getAccountNumber();
    }

    /**
     * {@inheritDoc}
     */
    public function setAccountNumber($account_number)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAccountNumber', [$account_number]);

        return parent::setAccountNumber($account_number);
    }

    /**
     * {@inheritDoc}
     */
    public function getType()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getType', []);

        return parent::getType();
    }

    /**
     * {@inheritDoc}
     */
    public function setType($type)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setType', [$type]);

        return parent::setType($type);
    }

    /**
     * {@inheritDoc}
     */
    public function getOperation()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getOperation', []);

        return parent::getOperation();
    }

    /**
     * {@inheritDoc}
     */
    public function setOperation($operation)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setOperation', [$operation]);

        return parent::setOperation($operation);
    }

    /**
     * {@inheritDoc}
     */
    public function getTypeAccount()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTypeAccount', []);

        return parent::getTypeAccount();
    }

    /**
     * {@inheritDoc}
     */
    public function setTypeAccount($type_account)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTypeAccount', [$type_account]);

        return parent::setTypeAccount($type_account);
    }

    /**
     * {@inheritDoc}
     */
    public function getCnpj()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCnpj', []);

        return parent::getCnpj();
    }

    /**
     * {@inheritDoc}
     */
    public function setCnpj($cnpj)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCnpj', [$cnpj]);

        return parent::setCnpj($cnpj);
    }

    /**
     * {@inheritDoc}
     */
    public function getName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getName', []);

        return parent::getName();
    }

}
