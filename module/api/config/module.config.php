<?php
return [
    'router' => [
        'routes' => [
            'api.rest.doctrine.usuario' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/usuario[/:usuario_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Usuario\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.usuario-perfil' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/usuario-perfil[/:usuario_perfil_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\UsuarioPerfil\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.perfil' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/perfil[/:perfil_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Perfil\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.recurso' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/recurso[/:recurso_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Recurso\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.acao' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/acao[/:acao_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Acao\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.possibilidade' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/possibilidade[/:possibilidade_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Possibilidade\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.privilegio' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/privilegio[/:privilegio_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Privilegio\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.configuracao' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/configuracao[/:configuracao_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Configuracao\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.motorista' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/motorista[/:motorista_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Motorista\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.motorista-veiculo' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/motorista-veiculo[/:motorista_veiculo_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\MotoristaVeiculo\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.categoria' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/categoria[/:categoria_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Categoria\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.endereco' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/endereco[/:endereco_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Endereco\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.cidade' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/cidade[/:cidade_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Cidade\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.viagem' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/viagem[/:viagem_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Viagem\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.veiculo' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/veiculo[/:veiculo_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Veiculo\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.marca' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/marca[/:marca_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\Marca\\Controller',
                    ],
                ],
            ],
            'api.rest.doctrine.log-status' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/api/log-status[/:log_status_id]',
                    'defaults' => [
                        'controller' => 'api\\V1\\Rest\\LogStatus\\Controller',
                    ],
                ],
            ],
        ],
    ],
    'zf-versioning' => [
        'uri' => [
            0 => 'api.rest.doctrine.usuario',
            1 => 'api.rest.doctrine.usuario-perfil',
            2 => 'api.rest.doctrine.perfil',
            3 => 'api.rest.doctrine.recurso',
            4 => 'api.rest.doctrine.acao',
            5 => 'api.rest.doctrine.possibilidade',
            6 => 'api.rest.doctrine.privilegio',
            7 => 'api.rest.doctrine.configuracao',
            8 => 'api.rest.doctrine.motorista',
            9 => 'api.rest.doctrine.motorista-veiculo',
            10 => 'api.rest.doctrine.categoria',
            11 => 'api.rest.doctrine.endereco',
            12 => 'api.rest.doctrine.cidade',
            13 => 'api.rest.doctrine.viagem',
            14 => 'api.rest.doctrine.veiculo',
            15 => 'api.rest.doctrine.marca',
            16 => 'api.rest.doctrine.log-status',
        ],
    ],
    'zf-rest' => [
        'api\\V1\\Rest\\Usuario\\Controller' => [
            'listener' => \api\V1\Rest\Usuario\UsuarioResource::class,
            'route_name' => 'api.rest.doctrine.usuario',
            'route_identifier_name' => 'usuario_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'usuario',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Cadastro\Entity\Usuario::class,
            'collection_class' => \api\V1\Rest\Usuario\UsuarioCollection::class,
            'service_name' => 'Usuario',
        ],
        'api\\V1\\Rest\\UsuarioPerfil\\Controller' => [
            'listener' => \api\V1\Rest\UsuarioPerfil\UsuarioPerfilResource::class,
            'route_name' => 'api.rest.doctrine.usuario-perfil',
            'route_identifier_name' => 'usuario_perfil_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'usuario_perfil',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Cadastro\Entity\UsuarioPerfil::class,
            'collection_class' => \api\V1\Rest\UsuarioPerfil\UsuarioPerfilCollection::class,
            'service_name' => 'UsuarioPerfil',
        ],
        'api\\V1\\Rest\\Perfil\\Controller' => [
            'listener' => \api\V1\Rest\Perfil\PerfilResource::class,
            'route_name' => 'api.rest.doctrine.perfil',
            'route_identifier_name' => 'perfil_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'perfil',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Acl\Entity\Perfil::class,
            'collection_class' => \api\V1\Rest\Perfil\PerfilCollection::class,
            'service_name' => 'Perfil',
        ],
        'api\\V1\\Rest\\Recurso\\Controller' => [
            'listener' => \api\V1\Rest\Recurso\RecursoResource::class,
            'route_name' => 'api.rest.doctrine.recurso',
            'route_identifier_name' => 'recurso_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'recurso',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => '25',
            'page_size_param' => null,
            'entity_class' => \Acl\Entity\Recurso::class,
            'collection_class' => \api\V1\Rest\Recurso\RecursoCollection::class,
            'service_name' => 'Recurso',
        ],
        'api\\V1\\Rest\\Acao\\Controller' => [
            'listener' => \api\V1\Rest\Acao\AcaoResource::class,
            'route_name' => 'api.rest.doctrine.acao',
            'route_identifier_name' => 'acao_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'acao',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => '25',
            'page_size_param' => null,
            'entity_class' => \Acl\Entity\Acao::class,
            'collection_class' => \api\V1\Rest\Acao\AcaoCollection::class,
            'service_name' => 'Acao',
        ],
        'api\\V1\\Rest\\Possibilidade\\Controller' => [
            'listener' => \api\V1\Rest\Possibilidade\PossibilidadeResource::class,
            'route_name' => 'api.rest.doctrine.possibilidade',
            'route_identifier_name' => 'possibilidade_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'possibilidade',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Acl\Entity\Possibilidade::class,
            'collection_class' => \api\V1\Rest\Possibilidade\PossibilidadeCollection::class,
            'service_name' => 'Possibilidade',
        ],
        'api\\V1\\Rest\\Privilegio\\Controller' => [
            'listener' => \api\V1\Rest\Privilegio\PrivilegioResource::class,
            'route_name' => 'api.rest.doctrine.privilegio',
            'route_identifier_name' => 'privilegio_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'privilegio',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Acl\Entity\Privilegio::class,
            'collection_class' => \api\V1\Rest\Privilegio\PrivilegioCollection::class,
            'service_name' => 'Privilegio',
        ],
        'api\\V1\\Rest\\Configuracao\\Controller' => [
            'listener' => \api\V1\Rest\Configuracao\ConfiguracaoResource::class,
            'route_name' => 'api.rest.doctrine.configuracao',
            'route_identifier_name' => 'configuracao_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'configuracao',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Configuracao\Entity\Configuracao::class,
            'collection_class' => \api\V1\Rest\Configuracao\ConfiguracaoCollection::class,
            'service_name' => 'Configuracao',
        ],
        'api\\V1\\Rest\\Motorista\\Controller' => [
            'listener' => \api\V1\Rest\Motorista\MotoristaResource::class,
            'route_name' => 'api.rest.doctrine.motorista',
            'route_identifier_name' => 'motorista_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'motorista',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Cadastro\Entity\Motorista::class,
            'collection_class' => \api\V1\Rest\Motorista\MotoristaCollection::class,
            'service_name' => 'Motorista',
        ],
        'api\\V1\\Rest\\MotoristaVeiculo\\Controller' => [
            'listener' => \api\V1\Rest\MotoristaVeiculo\MotoristaVeiculoResource::class,
            'route_name' => 'api.rest.doctrine.motorista-veiculo',
            'route_identifier_name' => 'motorista_veiculo_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'motorista_veiculo',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Cadastro\Entity\MotoristaVeiculo::class,
            'collection_class' => \api\V1\Rest\MotoristaVeiculo\MotoristaVeiculoCollection::class,
            'service_name' => 'MotoristaVeiculo',
        ],
        'api\\V1\\Rest\\Categoria\\Controller' => [
            'listener' => \api\V1\Rest\Categoria\CategoriaResource::class,
            'route_name' => 'api.rest.doctrine.categoria',
            'route_identifier_name' => 'categoria_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'categoria',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Transporte\Entity\Categoria::class,
            'collection_class' => \api\V1\Rest\Categoria\CategoriaCollection::class,
            'service_name' => 'Categoria',
        ],
        'api\\V1\\Rest\\Endereco\\Controller' => [
            'listener' => \api\V1\Rest\Endereco\EnderecoResource::class,
            'route_name' => 'api.rest.doctrine.endereco',
            'route_identifier_name' => 'endereco_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'endereco',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Endereco\Entity\Endereco::class,
            'collection_class' => \api\V1\Rest\Endereco\EnderecoCollection::class,
            'service_name' => 'Endereco',
        ],
        'api\\V1\\Rest\\Cidade\\Controller' => [
            'listener' => \api\V1\Rest\Cidade\CidadeResource::class,
            'route_name' => 'api.rest.doctrine.cidade',
            'route_identifier_name' => 'cidade_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'cidade',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Endereco\Entity\Cidade::class,
            'collection_class' => \api\V1\Rest\Cidade\CidadeCollection::class,
            'service_name' => 'Cidade',
        ],
        'api\\V1\\Rest\\Viagem\\Controller' => [
            'listener' => \api\V1\Rest\Viagem\ViagemResource::class,
            'route_name' => 'api.rest.doctrine.viagem',
            'route_identifier_name' => 'viagem_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'viagem',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Transporte\Entity\Viagem::class,
            'collection_class' => \api\V1\Rest\Viagem\ViagemCollection::class,
            'service_name' => 'Viagem',
        ],
        'api\\V1\\Rest\\Veiculo\\Controller' => [
            'listener' => \api\V1\Rest\Veiculo\VeiculoResource::class,
            'route_name' => 'api.rest.doctrine.veiculo',
            'route_identifier_name' => 'veiculo_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'veiculo',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Transporte\Entity\Veiculo::class,
            'collection_class' => \api\V1\Rest\Veiculo\VeiculoCollection::class,
            'service_name' => 'Veiculo',
        ],
        'api\\V1\\Rest\\Marca\\Controller' => [
            'listener' => \api\V1\Rest\Marca\MarcaResource::class,
            'route_name' => 'api.rest.doctrine.marca',
            'route_identifier_name' => 'marca_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'marca',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Transporte\Entity\Marca::class,
            'collection_class' => \api\V1\Rest\Marca\MarcaCollection::class,
            'service_name' => 'Marca',
        ],
        'api\\V1\\Rest\\LogStatus\\Controller' => [
            'listener' => \api\V1\Rest\LogStatus\LogStatusResource::class,
            'route_name' => 'api.rest.doctrine.log-status',
            'route_identifier_name' => 'log_status_id',
            'entity_identifier_name' => 'id',
            'collection_name' => 'log_status',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \Transporte\Entity\LogStatus::class,
            'collection_class' => \api\V1\Rest\LogStatus\LogStatusCollection::class,
            'service_name' => 'LogStatus',
        ],
    ],
    'zf-content-negotiation' => [
        'controllers' => [
            'api\\V1\\Rest\\Usuario\\Controller' => 'HalJson',
            'api\\V1\\Rest\\UsuarioPerfil\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Perfil\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Recurso\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Acao\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Possibilidade\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Privilegio\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Configuracao\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Motorista\\Controller' => 'HalJson',
            'api\\V1\\Rest\\MotoristaVeiculo\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Categoria\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Endereco\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Cidade\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Viagem\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Veiculo\\Controller' => 'HalJson',
            'api\\V1\\Rest\\Marca\\Controller' => 'HalJson',
            'api\\V1\\Rest\\LogStatus\\Controller' => 'HalJson',
        ],
        'accept_whitelist' => [
            'api\\V1\\Rest\\Usuario\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\UsuarioPerfil\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Perfil\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Recurso\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Acao\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Possibilidade\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Privilegio\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Configuracao\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Motorista\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\MotoristaVeiculo\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Categoria\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Endereco\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Cidade\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Viagem\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Veiculo\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\Marca\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'api\\V1\\Rest\\LogStatus\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
        ],
        'content_type_whitelist' => [
            'api\\V1\\Rest\\Usuario\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\UsuarioPerfil\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Perfil\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Recurso\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Acao\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Possibilidade\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Privilegio\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Configuracao\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Motorista\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\MotoristaVeiculo\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Categoria\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Endereco\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Cidade\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Viagem\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Veiculo\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\Marca\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
            'api\\V1\\Rest\\LogStatus\\Controller' => [
                0 => 'application/vnd.api.v1+json',
                1 => 'application/json',
            ],
        ],
    ],
    'zf-hal' => [
        'metadata_map' => [
            \Cadastro\Entity\Usuario::class => [
                'route_identifier_name' => 'usuario_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.usuario',
                'hydrator' => 'api\\V1\\Rest\\Usuario\\UsuarioHydrator',
            ],
            \api\V1\Rest\Usuario\UsuarioCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.usuario',
                'is_collection' => true,
            ],
            \Cadastro\Entity\UsuarioPerfil::class => [
                'route_identifier_name' => 'usuario_perfil_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.usuario-perfil',
                'hydrator' => 'api\\V1\\Rest\\UsuarioPerfil\\UsuarioPerfilHydrator',
            ],
            \api\V1\Rest\UsuarioPerfil\UsuarioPerfilCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.usuario-perfil',
                'is_collection' => true,
            ],
            \Acl\Entity\Perfil::class => [
                'route_identifier_name' => 'perfil_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.perfil',
                'hydrator' => 'api\\V1\\Rest\\Perfil\\PerfilHydrator',
            ],
            \api\V1\Rest\Perfil\PerfilCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.perfil',
                'is_collection' => true,
            ],
            \Acl\Entity\Recurso::class => [
                'route_identifier_name' => 'recurso_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.recurso',
                'hydrator' => 'api\\V1\\Rest\\Recurso\\RecursoHydrator',
            ],
            \api\V1\Rest\Recurso\RecursoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.recurso',
                'is_collection' => true,
            ],
            \Acl\Entity\Acao::class => [
                'route_identifier_name' => 'acao_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.acao',
                'hydrator' => 'api\\V1\\Rest\\Acao\\AcaoHydrator',
            ],
            \api\V1\Rest\Acao\AcaoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.acao',
                'is_collection' => true,
            ],
            \Acl\Entity\Possibilidade::class => [
                'route_identifier_name' => 'possibilidade_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.possibilidade',
                'hydrator' => 'api\\V1\\Rest\\Possibilidade\\PossibilidadeHydrator',
            ],
            \api\V1\Rest\Possibilidade\PossibilidadeCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.possibilidade',
                'is_collection' => true,
            ],
            \Acl\Entity\Privilegio::class => [
                'route_identifier_name' => 'privilegio_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.privilegio',
                'hydrator' => 'api\\V1\\Rest\\Privilegio\\PrivilegioHydrator',
            ],
            \api\V1\Rest\Privilegio\PrivilegioCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.privilegio',
                'is_collection' => true,
            ],
            \Configuracao\Entity\Configuracao::class => [
                'route_identifier_name' => 'configuracao_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.configuracao',
                'hydrator' => 'api\\V1\\Rest\\Configuracao\\ConfiguracaoHydrator',
            ],
            \api\V1\Rest\Configuracao\ConfiguracaoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.configuracao',
                'is_collection' => true,
            ],
            \Cadastro\Entity\Motorista::class => [
                'route_identifier_name' => 'motorista_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.motorista',
                'hydrator' => 'api\\V1\\Rest\\Motorista\\MotoristaHydrator',
            ],
            \api\V1\Rest\Motorista\MotoristaCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.motorista',
                'is_collection' => true,
            ],
            \Cadastro\Entity\MotoristaVeiculo::class => [
                'route_identifier_name' => 'motorista_veiculo_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.motorista-veiculo',
                'hydrator' => 'api\\V1\\Rest\\MotoristaVeiculo\\MotoristaVeiculoHydrator',
            ],
            \api\V1\Rest\MotoristaVeiculo\MotoristaVeiculoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.motorista-veiculo',
                'is_collection' => true,
            ],
            \Transporte\Entity\Categoria::class => [
                'route_identifier_name' => 'categoria_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.categoria',
                'hydrator' => 'api\\V1\\Rest\\Categoria\\CategoriaHydrator',
            ],
            \api\V1\Rest\Categoria\CategoriaCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.categoria',
                'is_collection' => true,
            ],
            \Endereco\Entity\Endereco::class => [
                'route_identifier_name' => 'endereco_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.endereco',
                'hydrator' => 'api\\V1\\Rest\\Endereco\\EnderecoHydrator',
            ],
            \api\V1\Rest\Endereco\EnderecoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.endereco',
                'is_collection' => true,
            ],
            \Endereco\Entity\Cidade::class => [
                'route_identifier_name' => 'cidade_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.cidade',
                'hydrator' => 'api\\V1\\Rest\\Cidade\\CidadeHydrator',
            ],
            \api\V1\Rest\Cidade\CidadeCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.cidade',
                'is_collection' => true,
            ],
            \Transporte\Entity\Viagem::class => [
                'route_identifier_name' => 'viagem_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.viagem',
                'hydrator' => 'api\\V1\\Rest\\Viagem\\ViagemHydrator',
            ],
            \api\V1\Rest\Viagem\ViagemCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.viagem',
                'is_collection' => true,
            ],
            \Transporte\Entity\Veiculo::class => [
                'route_identifier_name' => 'veiculo_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.veiculo',
                'hydrator' => 'api\\V1\\Rest\\Veiculo\\VeiculoHydrator',
            ],
            \api\V1\Rest\Veiculo\VeiculoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.veiculo',
                'is_collection' => true,
            ],
            \Transporte\Entity\Marca::class => [
                'route_identifier_name' => 'marca_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.marca',
                'hydrator' => 'api\\V1\\Rest\\Marca\\MarcaHydrator',
            ],
            \api\V1\Rest\Marca\MarcaCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.marca',
                'is_collection' => true,
            ],
            \Transporte\Entity\LogStatus::class => [
                'route_identifier_name' => 'log_status_id',
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.log-status',
                'hydrator' => 'api\\V1\\Rest\\LogStatus\\LogStatusHydrator',
            ],
            \api\V1\Rest\LogStatus\LogStatusCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'api.rest.doctrine.log-status',
                'is_collection' => true,
            ],
        ],
    ],
    'zf-apigility' => [
        'doctrine-connected' => [
            \api\V1\Rest\Usuario\UsuarioResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Usuario\\UsuarioHydrator',
            ],
            \api\V1\Rest\UsuarioPerfil\UsuarioPerfilResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\UsuarioPerfil\\UsuarioPerfilHydrator',
            ],
            \api\V1\Rest\Perfil\PerfilResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Perfil\\PerfilHydrator',
            ],
            \api\V1\Rest\Recurso\RecursoResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Recurso\\RecursoHydrator',
            ],
            \api\V1\Rest\Acao\AcaoResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Acao\\AcaoHydrator',
            ],
            \api\V1\Rest\Possibilidade\PossibilidadeResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Possibilidade\\PossibilidadeHydrator',
            ],
            \api\V1\Rest\Privilegio\PrivilegioResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Privilegio\\PrivilegioHydrator',
            ],
            \api\V1\Rest\Configuracao\ConfiguracaoResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Configuracao\\ConfiguracaoHydrator',
            ],
            \api\V1\Rest\Motorista\MotoristaResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Motorista\\MotoristaHydrator',
            ],
            \api\V1\Rest\MotoristaVeiculo\MotoristaVeiculoResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\MotoristaVeiculo\\MotoristaVeiculoHydrator',
            ],
            \api\V1\Rest\Categoria\CategoriaResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Categoria\\CategoriaHydrator',
            ],
            \api\V1\Rest\Ddd\DddResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Ddd\\DddHydrator',
            ],
            \api\V1\Rest\Endereco\EnderecoResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Endereco\\EnderecoHydrator',
            ],
            \api\V1\Rest\Cidade\CidadeResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Cidade\\CidadeHydrator',
            ],
            \api\V1\Rest\Viagem\ViagemResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Viagem\\ViagemHydrator',
            ],
            \api\V1\Rest\Veiculo\VeiculoResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Veiculo\\VeiculoHydrator',
            ],
            \api\V1\Rest\Marca\MarcaResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\Marca\\MarcaHydrator',
            ],
            \api\V1\Rest\LogStatus\LogStatusResource::class => [
                'object_manager' => 'doctrine.entitymanager.orm_default',
                'hydrator' => 'api\\V1\\Rest\\LogStatus\\LogStatusHydrator',
            ],
        ],
    ],
    'doctrine-hydrator' => [
        'api\\V1\\Rest\\Usuario\\UsuarioHydrator' => [
            'entity_class' => \Cadastro\Entity\Usuario::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\UsuarioPerfil\\UsuarioPerfilHydrator' => [
            'entity_class' => \Cadastro\Entity\UsuarioPerfil::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Perfil\\PerfilHydrator' => [
            'entity_class' => \Acl\Entity\Perfil::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Recurso\\RecursoHydrator' => [
            'entity_class' => \Acl\Entity\Recurso::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Acao\\AcaoHydrator' => [
            'entity_class' => \Acl\Entity\Acao::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Possibilidade\\PossibilidadeHydrator' => [
            'entity_class' => \Acl\Entity\Possibilidade::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Privilegio\\PrivilegioHydrator' => [
            'entity_class' => \Acl\Entity\Privilegio::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Configuracao\\ConfiguracaoHydrator' => [
            'entity_class' => \Configuracao\Entity\Configuracao::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Motorista\\MotoristaHydrator' => [
            'entity_class' => \Cadastro\Entity\Motorista::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\MotoristaVeiculo\\MotoristaVeiculoHydrator' => [
            'entity_class' => \Cadastro\Entity\MotoristaVeiculo::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Endereco\\EnderecoHydrator' => [
            'entity_class' => \Endereco\Entity\Endereco::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Cidade\\CidadeHydrator' => [
            'entity_class' => \Endereco\Entity\Cidade::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Viagem\\ViagemHydrator' => [
            'entity_class' => \Transporte\Entity\Viagem::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Veiculo\\VeiculoHydrator' => [
            'entity_class' => \Transporte\Entity\Veiculo::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Marca\\MarcaHydrator' => [
            'entity_class' => \Transporte\Entity\Marca::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
        'api\\V1\\Rest\\Categoria\\CategoriaHydrator' => [
            'entity_class' => \Transporte\Entity\Categoria::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'use_generated_hydrator' => true,
            'strategies' => [],
        ],
        'api\\V1\\Rest\\LogStatus\\LogStatusHydrator' => [
            'entity_class' => \Transporte\Entity\LogStatus::class,
            'object_manager' => 'doctrine.entitymanager.orm_default',
            'by_value' => true,
            'strategies' => [],
            'use_generated_hydrator' => true,
        ],
    ],
    'zf-content-validation' => [
        'api\\V1\\Rest\\Usuario\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Usuario\\Validator',
        ],
        'api\\V1\\Rest\\UsuarioPerfil\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\UsuarioPerfil\\Validator',
        ],
        'api\\V1\\Rest\\Perfil\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Perfil\\Validator',
        ],
        'api\\V1\\Rest\\Recurso\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Recurso\\Validator',
        ],
        'api\\V1\\Rest\\Acao\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Acao\\Validator',
        ],
        'api\\V1\\Rest\\Possibilidade\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Possibilidade\\Validator',
        ],
        'api\\V1\\Rest\\Privilegio\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Privilegio\\Validator',
        ],
        'api\\V1\\Rest\\Configuracao\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Configuracao\\Validator',
        ],
        'api\\V1\\Rest\\Motorista\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Motorista\\Validator',
        ],
        'api\\V1\\Rest\\MotoristaVeiculo\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\MotoristaVeiculo\\Validator',
        ],
        'api\\V1\\Rest\\Endereco\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Endereco\\Validator',
        ],
        'api\\V1\\Rest\\Cidade\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Cidade\\Validator',
        ],
        'api\\V1\\Rest\\Viagem\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Viagem\\Validator',
        ],
        'api\\V1\\Rest\\Veiculo\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Veiculo\\Validator',
        ],
        'api\\V1\\Rest\\Marca\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Marca\\Validator',
        ],
        'api\\V1\\Rest\\Categoria\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\Categoria\\Validator',
        ],
        'api\\V1\\Rest\\LogStatus\\Controller' => [
            'input_filter' => 'api\\V1\\Rest\\LogStatus\\Validator',
        ],
    ],
    'input_filter_specs' => [
        'api\\V1\\Rest\\Usuario\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'senha',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'email',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'telefone',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 30,
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'image',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'slug',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'activationKey',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            9 => [
                'name' => 'ativo',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            10 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'id',
            ],
        ],
        'api\\V1\\Rest\\UsuarioPerfil\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'api\\V1\\Rest\\Perfil\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            3 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'admin',
            ],
        ],
        'api\\V1\\Rest\\Recurso\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            3 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'somente_admin',
            ],
        ],
        'api\\V1\\Rest\\Acao\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
        ],
        'api\\V1\\Rest\\Possibilidade\\Validator' => [
            0 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'acao',
            ],
            1 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'recurso',
            ],
        ],
        'api\\V1\\Rest\\Privilegio\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'api\\V1\\Rest\\Configuracao\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'cabecalho_fixo',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'navegacao_fixa',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'navegacao_minificada',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'esconder_navegacao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            6 => [
                'name' => 'navegacao_topo',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            7 => [
                'name' => 'layout_caixa',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            8 => [
                'name' => 'conteudo_envio',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            9 => [
                'name' => 'sem_sobreposicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            10 => [
                'name' => 'off_canvas',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            11 => [
                'name' => 'fonte_conteudo_maior',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            12 => [
                'name' => 'texto_contraste',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            13 => [
                'name' => 'daltonimsmo',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            14 => [
                'name' => 'pre_carregamento_dentro',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            15 => [
                'name' => 'limpar_fundo_pagina',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            16 => [
                'name' => 'ocultar_icone_navegacao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            17 => [
                'name' => 'desabilitar_animacao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            18 => [
                'name' => 'ocultar_cartao_informacao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            19 => [
                'name' => 'subtitulo_lean',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            20 => [
                'name' => 'navegacao_hierarquica',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            21 => [
                'name' => 'tamanho_fonte',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            22 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'id',
            ],
        ],
        'api\\V1\\Rest\\Motorista\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'telefone',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 20,
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'data_nascimento',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'cnh',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'tipo_cnh',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 3,
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'cpf',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 20,
                        ],
                    ],
                ],
            ],
            8 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'ativo',
            ],
        ],
        'api\\V1\\Rest\\MotoristaVeiculo\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'ativo',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'carregado',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'proprio',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'api\\V1\\Rest\\Endereco\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'logradouro',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'numero',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 20,
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'bairro',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'cep',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 20,
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'telefone',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 20,
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'contato',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'latitude',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            9 => [
                'name' => 'longitude',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            10 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'cidade',
            ],
            11 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'terminal',
            ],
        ],
        'api\\V1\\Rest\\Cidade\\Validator' => [
            0 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'estado',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
        ],
        'api\\V1\\Rest\\Viagem\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'status',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            3 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'origem',
            ],
            4 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'destino',
            ],
            5 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'operacao',
            ],
        ],
        'api\\V1\\Rest\\Veiculo\\Validator' => [
            0 => [
                'name' => 'criado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'atualizado_em',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'placa',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 45,
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'modelo',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'cor',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 20,
                        ],
                    ],
                ],
            ],
            5 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'categoria',
            ],
            6 => [
                'required' => false,
                'validators' => [],
                'filters' => [],
                'name' => 'marca',
            ],
        ],
        'api\\V1\\Rest\\Marca\\Validator' => [
            0 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => 255,
                        ],
                    ],
                ],
            ],
        ],
        'api\\V1\\Rest\\Categoria\\Validator' => [
            0 => [
                'required' => true,
                'validators' => [],
                'filters' => [],
                'name' => 'nome',
            ],
            1 => [
                'required' => true,
                'validators' => [],
                'filters' => [],
                'name' => 'codigo',
            ],
        ],
        'api\\V1\\Rest\\LogStatus\\Validator' => [
            0 => [
                'name' => 'data',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'status',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
    ],
    'controllers' => [
        'factories' => [],
    ],
    'zf-rpc' => [],
];
