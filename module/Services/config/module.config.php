<?php
return [
    'controllers' => [
        'factories' => [
            'Services\\V1\\Rpc\\Auth\\Controller' => \Services\V1\Rpc\Auth\AuthControllerFactory::class,
            'Services\\V1\\Rpc\\EnviaConfirmacao\\Controller' => \Services\V1\Rpc\EnviaConfirmacao\EnviaConfirmacaoControllerFactory::class,
            'Services\\V1\\Rpc\\AtivarUsuario\\Controller' => \Services\V1\Rpc\AtivarUsuario\AtivarUsuarioControllerFactory::class,
            'Services\\V1\\Rpc\\RecuperarSenha\\Controller' => \Services\V1\Rpc\RecuperarSenha\RecuperarSenhaControllerFactory::class,
            'Services\\V1\\Rpc\\SalvarSlug\\Controller' => \Services\V1\Rpc\SalvarSlug\SalvarSlugControllerFactory::class,
            'Services\\V1\\Rpc\\SalvarImagem\\Controller' => \Services\V1\Rpc\SalvarImagem\SalvarImagemControllerFactory::class,
            'Services\\V1\\Rpc\\Privilegio\\Controller' => \Services\V1\Rpc\Privilegio\PrivilegioControllerFactory::class,
            'Services\\V1\\Rpc\\Permite\\Controller' => \Services\V1\Rpc\Permite\PermiteControllerFactory::class,
            'Services\\V1\\Rpc\\PermiteMassa\\Controller' => \Services\V1\Rpc\PermiteMassa\PermiteMassaControllerFactory::class,
            'Services\\V1\\Rpc\\IsAdmin\\Controller' => \Services\V1\Rpc\IsAdmin\IsAdminControllerFactory::class,
            'Services\\V1\\Rpc\\EnviarNotificacao\\Controller' => \Services\V1\Rpc\EnviarNotificacao\EnviarNotificacaoControllerFactory::class,
            'Services\\V1\\Rpc\\SemCarga\\Controller' => \Services\V1\Rpc\SemCarga\SemCargaControllerFactory::class,
            'Services\\V1\\Rpc\\Viagem\\Controller' => \Services\V1\Rpc\Viagem\ViagemControllerFactory::class,
            'Services\\V1\\Rpc\\Motorista\\Controller' => \Services\V1\Rpc\Motorista\MotoristaControllerFactory::class,
        ],
    ],
    'router' => [
        'routes' => [
            'services.rpc.auth' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/service/auth',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\Auth\\Controller',
                        'action' => 'auth',
                    ],
                ],
            ],
            'services.rpc.envia-confirmacao' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/envia-confirmacao',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\EnviaConfirmacao\\Controller',
                        'action' => 'enviaConfirmacao',
                    ],
                ],
            ],
            'services.rpc.ativar-usuario' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/ativar-usuario',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\AtivarUsuario\\Controller',
                        'action' => 'ativarUsuario',
                    ],
                ],
            ],
            'services.rpc.recuperar-senha' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/recuperar-senha',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\RecuperarSenha\\Controller',
                        'action' => 'recuperarSenha',
                    ],
                ],
            ],
            'services.rpc.salvar-slug' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/salvar-slug',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\SalvarSlug\\Controller',
                        'action' => 'salvarSlug',
                    ],
                ],
            ],
            'services.rpc.salvar-imagem' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/salvar-imagem',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\SalvarImagem\\Controller',
                        'action' => 'salvarImagem',
                    ],
                ],
            ],
            'services.rpc.privilegio' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/privilegio',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\Privilegio\\Controller',
                        'action' => 'privilegio',
                    ],
                ],
            ],
            'services.rpc.permite' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/permite',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\Permite\\Controller',
                        'action' => 'permite',
                    ],
                ],
            ],
            'services.rpc.permite-massa' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/permite-massa',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\PermiteMassa\\Controller',
                        'action' => 'permiteMassa',
                    ],
                ],
            ],
            'services.rpc.is-admin' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/is-admin',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\IsAdmin\\Controller',
                        'action' => 'isAdmin',
                    ],
                ],
            ],
            'services.rpc.enviar-notificacao' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/envia-notificacao',
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\EnviarNotificacao\\Controller',
                        'action' => 'enviarNotificacao',
                    ],
                ],
            ],
            'services.rpc.sem-carga' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/sem-carga[/:motorista][/page/:page][/order_by/:order_by][/:order]',
                    'constraints' => [
                        'action' => '(?!\\bpage\\b)(?!\\border_by\\b)[a-zA-Z][a-zA-Z0-9_-]*',
                        'motorista' => '\\d+',
                        'page' => '\\d+',
                        'order_by' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'order' => 'ASC|DESC',
                    ],
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\SemCarga\\Controller',
                        'action' => 'semCarga',
                    ],
                ],
            ],
            'services.rpc.viagem' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/viagem[/:action][/inicio/:inicial][/final/:final][/page/:page][/order_by/:order_by][/:order]',
                    'constraints' => [
                        'action' => '(?!\\bpage\\b)(?!\\border_by\\b)[a-zA-Z][a-zA-Z0-9_-]*',
                        'inicial' => '[0-9][0-9_-]*',
                        'final' => '[0-9][0-9_-]*',
                        'page' => '\\d+',
                        'order_by' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'order' => 'ASC|DESC',
                    ],
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\Viagem\\Controller',
                        'action' => 'viagem',
                    ],
                ],
            ],
            'services.rpc.motorista' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services/motorista[/:action[/:motorista]][/page/:page]',
                    'constraints' => [
                        'action' => '(?!\\bpage\\b)(?!\\border_by\\b)[a-zA-Z][a-zA-Z0-9_-]*',
                        'motorista' => '\\d+',
                        'page' => '\\d+'
                    ],
                    'defaults' => [
                        'controller' => 'Services\\V1\\Rpc\\Motorista\\Controller',
                        'action' => 'motorista',
                    ],
                ],
            ],
        ],
    ],
    'zf-versioning' => [
        'uri' => [
            0 => 'services.rpc.auth',
            1 => 'services.rpc.envia-confirmacao',
            2 => 'services.rpc.ativar-usuario',
            3 => 'services.rpc.recuperar-senha',
            4 => 'services.rpc.salvar-slug',
            5 => 'services.rpc.salvar-imagem',
            7 => 'services.rpc.privilegio',
            8 => 'services.rpc.permite',
            9 => 'services.rpc.permite-massa',
            11 => 'services.rpc.is-admin',
            13 => 'services.rpc.enviar-notificacao',
            14 => 'services.rpc.sem-carga',
            15 => 'services.rpc.viagem',
            16 => 'services.rpc.motorista',
        ],
    ],
    'zf-rpc' => [
        'Services\\V1\\Rpc\\Auth\\Controller' => [
            'service_name' => 'Auth',
            'http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'route_name' => 'services.rpc.auth',
        ],
        'Services\\V1\\Rpc\\EnviaConfirmacao\\Controller' => [
            'service_name' => 'EnviaConfirmacao',
            'http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'route_name' => 'services.rpc.envia-confirmacao',
        ],
        'Services\\V1\\Rpc\\AtivarUsuario\\Controller' => [
            'service_name' => 'AtivarUsuario',
            'http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'route_name' => 'services.rpc.ativar-usuario',
        ],
        'Services\\V1\\Rpc\\RecuperarSenha\\Controller' => [
            'service_name' => 'RecuperarSenha',
            'http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'route_name' => 'services.rpc.recuperar-senha',
        ],
        'Services\\V1\\Rpc\\SalvarSlug\\Controller' => [
            'service_name' => 'SalvarSlug',
            'http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'route_name' => 'services.rpc.salvar-slug',
        ],
        'Services\\V1\\Rpc\\SalvarImagem\\Controller' => [
            'service_name' => 'SalvarImagem',
            'http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'route_name' => 'services.rpc.salvar-imagem',
        ],
        'Services\\V1\\Rpc\\Privilegio\\Controller' => [
            'service_name' => 'Privilegio',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'services.rpc.privilegio',
        ],
        'Services\\V1\\Rpc\\Permite\\Controller' => [
            'service_name' => 'Permite',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'services.rpc.permite',
        ],
        'Services\\V1\\Rpc\\PermiteMassa\\Controller' => [
            'service_name' => 'PermiteMassa',
            'http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'route_name' => 'services.rpc.permite-massa',
        ],
        'Services\\V1\\Rpc\\IsAdmin\\Controller' => [
            'service_name' => 'IsAdmin',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'services.rpc.is-admin',
        ],
        'Services\\V1\\Rpc\\EnviarNotificacao\\Controller' => [
            'service_name' => 'EnviarNotificacao',
            'http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'route_name' => 'services.rpc.enviar-notificacao',
        ],
        'Services\\V1\\Rpc\\SemCarga\\Controller' => [
            'service_name' => 'SemCarga',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'services.rpc.sem-carga',
        ],
        'Services\\V1\\Rpc\\Viagem\\Controller' => [
            'service_name' => 'Viagem',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'services.rpc.viagem',
        ],
        'Services\\V1\\Rpc\\Motorista\\Controller' => [
            'service_name' => 'Motorista',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'services.rpc.motorista',
        ],
    ],
    'zf-content-negotiation' => [
        'controllers' => [
            'Services\\V1\\Rpc\\Auth\\Controller' => 'Json',
            'Services\\V1\\Rpc\\EnviaConfirmacao\\Controller' => 'Json',
            'Services\\V1\\Rpc\\AtivarUsuario\\Controller' => 'Json',
            'Services\\V1\\Rpc\\RecuperarSenha\\Controller' => 'Json',
            'Services\\V1\\Rpc\\SalvarSlug\\Controller' => 'Json',
            'Services\\V1\\Rpc\\SalvarImagem\\Controller' => 'Json',
            'Services\\V1\\Rpc\\Privilegio\\Controller' => 'Json',
            'Services\\V1\\Rpc\\Permite\\Controller' => 'Json',
            'Services\\V1\\Rpc\\PermiteMassa\\Controller' => 'Json',
            'Services\\V1\\Rpc\\IsAdmin\\Controller' => 'Json',
            'Services\\V1\\Rpc\\EnviarNotificacao\\Controller' => 'Json',
            'Services\\V1\\Rpc\\SemCarga\\Controller' => 'Json',
            'Services\\V1\\Rpc\\Viagem\\Controller' => 'Json',
            'Services\\V1\\Rpc\\Motorista\\Controller' => 'Json',
        ],
        'accept_whitelist' => [
            'Services\\V1\\Rpc\\Auth\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\EnviaConfirmacao\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\AtivarUsuario\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\RecuperarSenha\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\SalvarSlug\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\SalvarImagem\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\Privilegio\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\Permite\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\PermiteMassa\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\IsAdmin\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\EnviarNotificacao\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\SemCarga\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\Viagem\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Services\\V1\\Rpc\\Motorista\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
        ],
        'content_type_whitelist' => [
            'Services\\V1\\Rpc\\Auth\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\EnviaConfirmacao\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\AtivarUsuario\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\RecuperarSenha\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\SalvarSlug\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\SalvarImagem\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\Privilegio\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\Permite\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\PermiteMassa\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\IsAdmin\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\EnviarNotificacao\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\SemCarga\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\Viagem\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
            'Services\\V1\\Rpc\\Motorista\\Controller' => [
                0 => 'application/vnd.services.v1+json',
                1 => 'application/json',
            ],
        ],
    ],
];
