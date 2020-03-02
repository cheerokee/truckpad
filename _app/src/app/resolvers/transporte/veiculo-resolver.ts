import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import {VeiculoService} from "../../services/http/transporte/veiculo.service";

@Injectable()
export class VeiculoResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: VeiculoService) {
        super(httpService);
    }
}
