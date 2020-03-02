import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";

import { AcaoHttpService } from "../../services/http/acl/acao-http.service";

@Injectable()
export class AcaoResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: AcaoHttpService) {
        super(httpService);
    }
}
