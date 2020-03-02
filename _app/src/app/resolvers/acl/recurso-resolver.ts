import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";

import { RecursoHttpService } from "../../services/http/acl/recurso-http.service";

@Injectable()
export class RecursoResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: RecursoHttpService) {
        super(httpService);
    }
}
