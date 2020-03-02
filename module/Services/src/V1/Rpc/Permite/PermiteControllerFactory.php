<?php
namespace Services\V1\Rpc\Permite;

class PermiteControllerFactory
{
    public function __invoke($controllers)
    {
        return new PermiteController();
    }
}
