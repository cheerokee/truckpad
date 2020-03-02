import { Component, Input, OnInit } from '@angular/core';
import { AcaoHttpService } from "../../../../../services/http/acl/acao-http.service";
import { FormBase } from "../../../base/form-base/form-base";
import {HttpClient} from "@angular/common/http";
import {HttpGetter} from "../../../../../services/http-getter";
import {AuthService} from "../../../../../services/auth.service";

@Component({
    selector: 'form-entity',
    templateUrl: './form-entity.component.html',
    styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent extends FormBase implements OnInit {

    constructor(public service: AcaoHttpService,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService) {
        super(service,http,httpGetter,authService);

        this.controller = "acao";
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
            }
        ];
    }
}
