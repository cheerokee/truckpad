<?php
namespace Services;

use ZF\Apigility\Provider\ApigilityProviderInterface;
use Services\V1\Rpc\Auth\Adapter as AuthAdapter;

class Module implements ApigilityProviderInterface
{
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'Services\V1\Rpc\Auth\Adapter' => function($sm){
                    return new AuthAdapter($sm->get('Doctrine\ORM\EntityManager'));
                },
            )
        );
    }

    public function getAutoloaderConfig()
    {
        return [
            'ZF\Apigility\Autoloader' => [
                'namespaces' => [
                    __NAMESPACE__ => __DIR__ . '/src',
                ],
            ],
        ];
    }
}
