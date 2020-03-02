<?php
namespace Services\V1\Rpc\SemCarga;

class SemCargaControllerFactory
{
    public function __invoke($controllers)
    {
        return new SemCargaController();
    }
}
