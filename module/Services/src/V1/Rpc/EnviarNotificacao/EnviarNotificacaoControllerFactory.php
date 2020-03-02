<?php
namespace Services\V1\Rpc\EnviarNotificacao;

class EnviarNotificacaoControllerFactory
{
    public function __invoke($controllers)
    {
        return new EnviarNotificacaoController();
    }
}
