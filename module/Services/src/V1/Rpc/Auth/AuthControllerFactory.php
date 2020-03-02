<?php
namespace Services\V1\Rpc\Auth;

class AuthControllerFactory
{
    public function __invoke($controllers)
    {
        return new AuthController();
    }
}
