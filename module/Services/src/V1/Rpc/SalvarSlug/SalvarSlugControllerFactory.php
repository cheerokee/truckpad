<?php
namespace Services\V1\Rpc\SalvarSlug;

class SalvarSlugControllerFactory
{
    public function __invoke($controllers)
    {
        return new SalvarSlugController();
    }
}
