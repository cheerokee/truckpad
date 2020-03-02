<?php
namespace Services\V1\Rpc\Privilegio;

class PrivilegioControllerFactory
{
    public function __invoke($controllers)
    {
        return new PrivilegioController();
    }
}
