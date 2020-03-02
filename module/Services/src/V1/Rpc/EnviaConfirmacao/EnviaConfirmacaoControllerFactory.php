<?php
namespace Services\V1\Rpc\EnviaConfirmacao;

class EnviaConfirmacaoControllerFactory
{
    public function __invoke($controllers)
    {
        return new EnviaConfirmacaoController();
    }
}
