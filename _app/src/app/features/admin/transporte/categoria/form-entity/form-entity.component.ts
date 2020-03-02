import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../../../services/auth.service";

import { HttpGetter } from "../../../../../services/http-getter";
import { FormBase } from "../../../base/form-base/form-base";
import {CategoriaService} from "../../../../../services/http/transporte/categoria.service";

@Component({
    selector: 'form-entity',
    templateUrl: './form-entity.component.html',
    styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent extends FormBase implements OnInit {

    constructor(public service: CategoriaService,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService ) {
        super(service,http,httpGetter,authService);
        this.controller = "categoria";
        this.returnPath = `/admin/transporte/${ this.controller }`;
        this.elements = [
            {
                name: "nome",
                label: "Nome",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "codigo",
                label: "Código",
                type: "number",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];
    }
}
