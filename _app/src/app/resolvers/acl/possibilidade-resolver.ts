import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";

import { PossibilidadeHttpService } from "../../services/http/acl/possibilidade-http.service";

@Injectable()
export class PossibilidadeResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: PossibilidadeHttpService) {
        super(httpService);
    }
}
