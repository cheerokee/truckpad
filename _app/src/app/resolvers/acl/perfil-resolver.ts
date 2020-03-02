import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";

import { PerfilHttpService } from "../../services/http/acl/perfil-http.service";

@Injectable()
export class PerfilResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: PerfilHttpService) {
        super(httpService);
    }
}
