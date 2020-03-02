import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BaseResolver } from "../base/base-resolver";
import { CategoriaService } from "../../services/http/transporte/categoria.service";

@Injectable()
export class CategoriaResolver extends BaseResolver implements Resolve<any> {
    constructor(public httpService: CategoriaService) {
        super(httpService);
    }
}
