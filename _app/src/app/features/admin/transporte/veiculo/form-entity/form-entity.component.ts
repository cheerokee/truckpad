import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../../../services/auth.service";
import { HttpGetter } from "../../../../../services/http-getter";
import {FormBase} from "../../../base/form-base/form-base";
import {Validators} from "@angular/forms";
import {VeiculoService} from "../../../../../services/http/transporte/veiculo.service";

@Component({
    selector: 'form-entity',
    templateUrl: './form-entity.component.html',
    styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent extends FormBase implements OnInit {

    constructor(public service: VeiculoService,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService ) {
        super(service,http,httpGetter,authService);
        this.controller = "veiculo";
        this.returnPath = `/admin/transporte/${ this.controller }`;
        this.elements = [
            {
                name: "placa",
                label: "Placa",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "modelo",
                label: "Modelo",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cor",
                label: "Cor",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "categoria",
                label: "Categoria",
                type: "join-select",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "marca",
                label: "Marca",
                type: "join-select",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];

        let field;
        let srv;

        field = {
            alias: 'categoria', // Nome do elemento
            entity: 'categoria' // Nome da tabela join
        };

        srv = this.httpGetter.getService(field);

        this.setOptions(srv,field);

        field = {
            alias: 'marca', // Nome do elemento
            entity: 'marca' // Nome da tabela join
        };

        srv = this.httpGetter.getService(field);

        this.setOptions(srv,field);
    }
}
