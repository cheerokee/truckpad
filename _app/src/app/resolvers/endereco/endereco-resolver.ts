import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import { EnderecoService } from "../../services/http/endereco/endereco.service";

@Injectable()
export class EnderecoResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: EnderecoService) {
        super(httpService);
    }
}
