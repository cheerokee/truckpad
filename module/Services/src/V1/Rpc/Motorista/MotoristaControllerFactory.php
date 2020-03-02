<?php
namespace Services\V1\Rpc\Motorista;

class MotoristaControllerFactory
{
    public function __invoke($controllers)
    {
        return new MotoristaController();
    }
}
