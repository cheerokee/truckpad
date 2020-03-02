<?php

namespace DoctrineORMModule\Proxy\__CG__\Register\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class User extends \Register\Entity\User implements \Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'id', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'name', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'email', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'password', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'type_user', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'document', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'active', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'phone', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'celphone', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'birthdate', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'gender', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'image', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'friendlyUrl', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'salt', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'activationKey', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'updated_at', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'created_at', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'user_roles'];
        }

        return ['__isInitialized__', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'id', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'name', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'email', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'password', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'type_user', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'document', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'active', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'phone', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'celphone', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'birthdate', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'gender', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'image', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'friendlyUrl', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'salt', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'activationKey', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'updated_at', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'created_at', '' . "\0" . 'Register\\Entity\\User' . "\0" . 'user_roles'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (User $proxy) {
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
    public function __toString()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, '__toString', []);

        return parent::__toString();
    }

    /**
     * {@inheritDoc}
     */
    public function getPassword()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPassword', []);

        return parent::getPassword();
    }

    /**
     * {@inheritDoc}
     */
    public function setPassword($password)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPassword', [$password]);

        return parent::setPassword($password);
    }

    /**
     * {@inheritDoc}
     */
    public function encryptPassword($password)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'encryptPassword', [$password]);

        return parent::encryptPassword($password);
    }

    /**
     * {@inheritDoc}
     */
    public function getSalt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSalt', []);

        return parent::getSalt();
    }

    /**
     * {@inheritDoc}
     */
    public function setSalt($salt)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSalt', [$salt]);

        return parent::setSalt($salt);
    }

    /**
     * {@inheritDoc}
     */
    public function getActive()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getActive', []);

        return parent::getActive();
    }

    /**
     * {@inheritDoc}
     */
    public function setActive($active)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setActive', [$active]);

        return parent::setActive($active);
    }

    /**
     * {@inheritDoc}
     */
    public function getActivationKey()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getActivationKey', []);

        return parent::getActivationKey();
    }

    /**
     * {@inheritDoc}
     */
    public function setActivationKey($activationKey)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setActivationKey', [$activationKey]);

        return parent::setActivationKey($activationKey);
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
    public function setUpdatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUpdatedAt', []);

        return parent::setUpdatedAt();
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
    public function setCreatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreatedAt', []);

        return parent::setCreatedAt();
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
    public function getDocument()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDocument', []);

        return parent::getDocument();
    }

    /**
     * {@inheritDoc}
     */
    public function setDocument($document)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDocument', [$document]);

        return parent::setDocument($document);
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
    public function getEmail()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getEmail', []);

        return parent::getEmail();
    }

    /**
     * {@inheritDoc}
     */
    public function setEmail($email)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setEmail', [$email]);

        return parent::setEmail($email);
    }

    /**
     * {@inheritDoc}
     */
    public function getPhone()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPhone', []);

        return parent::getPhone();
    }

    /**
     * {@inheritDoc}
     */
    public function setPhone($phone)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPhone', [$phone]);

        return parent::setPhone($phone);
    }

    /**
     * {@inheritDoc}
     */
    public function getCelphone()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCelphone', []);

        return parent::getCelphone();
    }

    /**
     * {@inheritDoc}
     */
    public function setCelphone($celphone)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCelphone', [$celphone]);

        return parent::setCelphone($celphone);
    }

    /**
     * {@inheritDoc}
     */
    public function getUserRoles()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUserRoles', []);

        return parent::getUserRoles();
    }

    /**
     * {@inheritDoc}
     */
    public function setUserRoles($user_roles)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUserRoles', [$user_roles]);

        return parent::setUserRoles($user_roles);
    }

    /**
     * {@inheritDoc}
     */
    public function hasThisRole($role)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'hasThisRole', [$role]);

        return parent::hasThisRole($role);
    }

    /**
     * {@inheritDoc}
     */
    public function getFriendlyUrl()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFriendlyUrl', []);

        return parent::getFriendlyUrl();
    }

    /**
     * {@inheritDoc}
     */
    public function setFriendlyUrl($friendlyUrl)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFriendlyUrl', [$friendlyUrl]);

        return parent::setFriendlyUrl($friendlyUrl);
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

    /**
     * {@inheritDoc}
     */
    public function getBirthdate()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getBirthdate', []);

        return parent::getBirthdate();
    }

    /**
     * {@inheritDoc}
     */
    public function setBirthdate($birthdate)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setBirthdate', [$birthdate]);

        return parent::setBirthdate($birthdate);
    }

    /**
     * {@inheritDoc}
     */
    public function isGender()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isGender', []);

        return parent::isGender();
    }

    /**
     * {@inheritDoc}
     */
    public function getGender()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getGender', []);

        return parent::getGender();
    }

    /**
     * {@inheritDoc}
     */
    public function setGender($gender)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setGender', [$gender]);

        return parent::setGender($gender);
    }

    /**
     * {@inheritDoc}
     */
    public function getTypeUser()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTypeUser', []);

        return parent::getTypeUser();
    }

    /**
     * {@inheritDoc}
     */
    public function setTypeUser($type_user)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTypeUser', [$type_user]);

        return parent::setTypeUser($type_user);
    }

}
