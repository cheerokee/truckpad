<?php
namespace Services\V1\Rpc\IsAdmin;

class IsAdminControllerFactory
{
    public function __invoke($controllers)
    {
        return new IsAdminController();
    }
}
