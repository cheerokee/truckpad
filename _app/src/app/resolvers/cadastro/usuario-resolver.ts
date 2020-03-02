import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import { UsuarioHttpService } from "../../services/http/cadastro/usuario-http.service";

@Injectable()
export class UsuarioResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: UsuarioHttpService) {
        super(httpService);
    }
}
