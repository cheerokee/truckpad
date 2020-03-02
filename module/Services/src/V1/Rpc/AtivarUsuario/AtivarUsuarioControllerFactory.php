<?php
namespace Services\V1\Rpc\AtivarUsuario;

class AtivarUsuarioControllerFactory
{
    public function __invoke($controllers)
    {
        return new AtivarUsuarioController();
    }
}
