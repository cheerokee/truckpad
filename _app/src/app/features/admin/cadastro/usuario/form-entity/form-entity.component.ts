import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../../../services/auth.service";

import { PossibilidadeHttpService } from "../../../../../services/http/acl/possibilidade-http.service";
import { HttpGetter } from "../../../../../services/http-getter";
import {FormBase} from "../../../base/form-base/form-base";
import {Validators} from "@angular/forms";

@Component({
    selector: 'form-entity',
    templateUrl: './form-entity.component.html',
    styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent extends FormBase implements OnInit {

    constructor(public service: PossibilidadeHttpService,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService ) {
        super(service,http,httpGetter,authService);
        this.controller = "usuario";
        this.returnPath = `/admin/cadastro/${ this.controller }`;
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
                name: "email",
                label: "E-mail",
                type: "text",
                required: true,
                value: '',
                validators: [Validators.email] // validações adicionais ex.: Validators.required
            },
            {
                name: "telefone",
                label: "Celular",
                type: "telefone",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "senha",
                label: "Senha",
                type: "hidden",
                required: false,
                value: '123mudar',
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];
    }
}
