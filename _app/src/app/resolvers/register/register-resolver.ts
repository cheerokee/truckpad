import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UsuarioHttpService } from "../../services/http/cadastro/usuario-http.service";
import { SearchParams } from "../../model";

@Injectable()
export class RegisterResolver implements Resolve<any> {

    searchParams: SearchParams;

    constructor(public httpService: UsuarioHttpService) {}

    resolve(route: ActivatedRouteSnapshot) {
        this.searchParams = {
            filter : [
                { type : 'eq', field : 'activation_key', value : route.params.chave }
            ]
        };
        return this.httpService.list(this.searchParams);
    }
}
