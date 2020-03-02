<?php
namespace Services\V1\Rpc\SalvarImagem;

class SalvarImagemControllerFactory
{
    public function __invoke($controllers)
    {
        return new SalvarImagemController();
    }
}
