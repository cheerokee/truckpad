<?php
return array(
    'mail' => array(
        'name' => 'smtp.gmail.com',
        'host' => 'smtp.gmail.com',
        'connection_class' => 'login',
        'connection_config' => array(
            'username' => 'noreply.truckpad@gmail.com',
            'password' => 'inovens123456',
            'ssl' => 'tls',
            'port' => 587,
            'from' => 'noreply.truckpad@gmail.com',
            'name_from' => 'TruckPad',
            'charset' => 'UTF8',
            'driverOptions' => array(
                'charset' => 'UTF8',
            ),
        )
    ),
    'service_manager' => array(
        'factories' => array(
            'Zend\Db\Adapter\Adapter'
            => 'Zend\Db\Adapter\AdapterServiceFactory',
        ),
    ),
    'zf-content-negotiation' => array(
        'selectors' => array(
            'HTML-Json' => [
                'ZF\ContentNegotiation\JsonModel' => [
                    'application/json',
                    'application/*+json',
                ],
                'ZF\ContentNegotiation\ViewModel' => [
                    'text/html',
                ],
            ],
        ),
    ),
    'translator' => [
        'locale' => 'pt_BR',
        'translation_file_patterns' => [
            [
                'type'     => 'gettext',
                'base_dir' => getcwd() .  '/data/language',
                'pattern'  => '%s.mo',
            ],
        ],
    ],
    'db' => array(
        'adapters' => array(
            'dummy' => array(),
        ),
    ),
);
