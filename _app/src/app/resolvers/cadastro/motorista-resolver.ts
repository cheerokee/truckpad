import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import { MotoristaHttpService } from "../../services/http/cadastro/motorista-http.service";

@Injectable()
export class MotoristaResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: MotoristaHttpService) {
        super(httpService);
    }
}
