import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from "../../../base/form-base/form-base";
import {HttpClient} from "@angular/common/http";
import {HttpGetter} from "../../../../../services/http-getter";
import {AuthService} from "../../../../../services/auth.service";
import {RecursoHttpService} from "../../../../../services/http/acl/recurso-http.service";

@Component({
    selector: 'form-entity',
    templateUrl: './form-entity.component.html',
    styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent extends FormBase implements OnInit {

    constructor(public service: RecursoHttpService,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService) {
        super(service,http,httpGetter,authService);

        this.controller = "recurso";
        this.returnPath = `/admin/acl/${ this.controller }`;

        this.elements = [
            {
                name: "nome",
                label: "Nome",
                type: "text",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "somente_admin",
                label: "Somente Admin?",
                type: "select",
                required: true,
                value: '',
                options: [
                    { id : 0, text : 'Não'},
                    { id : 1, text : 'Sim'}
                ],
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];
    }
}
