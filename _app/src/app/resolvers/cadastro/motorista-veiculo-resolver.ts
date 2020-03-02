import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import { MotoristaVeiculoService } from "../../services/http/cadastro/motorista-veiculo.service";

@Injectable()
export class MotoristaVeiculoResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: MotoristaVeiculoService) {
        super(httpService);
    }
}
