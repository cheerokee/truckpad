import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import {MarcaService} from "../../services/http/transporte/marca.service";

@Injectable()
export class MarcaResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: MarcaService) {
        super(httpService);
    }
}
