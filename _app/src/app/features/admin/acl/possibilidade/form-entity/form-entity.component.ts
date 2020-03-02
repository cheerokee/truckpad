import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../../../services/auth.service";

import { PossibilidadeHttpService } from "../../../../../services/http/acl/possibilidade-http.service";
import { HttpGetter } from "../../../../../services/http-getter";
import {FormBase} from "../../../base/form-base/form-base";

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
        this.controller = "possibilidade";
        this.returnPath = `/admin/acl/${ this.controller }`;
        this.elements = [
            {
                name: "acao",
                label: "Ação",
                type: "join-select",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "recurso",
                label: "Recurso",
                type: "join-autocomplete",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];

        let field;
        let srv;

        field = 'acao';
        srv = this.httpGetter.getService(field);

        this.setOptions(srv,field);

        field = 'recurso';
        let serachparams = { // Fazer um filtro padrao
            "filter" : [],
            "order-by" : []
        };
        srv = this.httpGetter.getService(field);
        this.setOptions(srv,field);
    }
}
