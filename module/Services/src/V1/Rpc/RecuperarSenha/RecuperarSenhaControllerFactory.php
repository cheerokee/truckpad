<?php
namespace Services\V1\Rpc\RecuperarSenha;

class RecuperarSenhaControllerFactory
{
    public function __invoke($controllers)
    {
        return new RecuperarSenhaController();
    }
}
