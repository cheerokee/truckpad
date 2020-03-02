import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import { CidadeService } from "../../services/http/endereco/cidade.service";

@Injectable()
export class CidadeResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: CidadeService) {
        super(httpService);
    }
}
