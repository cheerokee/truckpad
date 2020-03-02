import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import {ViagemService} from "../../services/http/transporte/viagem.service";

@Injectable()
export class ViagemResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: ViagemService) {
        super(httpService);
    }
}
