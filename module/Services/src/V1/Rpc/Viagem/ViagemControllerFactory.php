<?php
namespace Services\V1\Rpc\Viagem;

class ViagemControllerFactory
{
    public function __invoke($controllers)
    {
        return new ViagemController();
    }
}
