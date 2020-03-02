<?php
namespace Services\V1\Rpc\PermiteMassa;

class PermiteMassaControllerFactory
{
    public function __invoke($controllers)
    {
        return new PermiteMassaController();
    }
}
