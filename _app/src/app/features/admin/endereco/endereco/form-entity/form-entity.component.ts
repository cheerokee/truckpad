import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../../../services/auth.service";

import { HttpGetter } from "../../../../../services/http-getter";
import { FormBase } from "../../../base/form-base/form-base";
import {EnderecoService} from "../../../../../services/http/endereco/endereco.service";

@Component({
    selector: 'form-entity',
    templateUrl: './form-entity.component.html',
    styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent extends FormBase implements OnInit {

    constructor(public service: EnderecoService,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService ) {
        super(service,http,httpGetter,authService);
        this.controller = "endereco";
        this.returnPath = `/admin/endereco/${ this.controller }`;
        this.elements = [
            {
                name: "logradouro",
                label: "Logradouro",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "numero",
                label: "Número",
                type: "text",
                required: false,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "bairro",
                label: "Bairro",
                type: "text",
                required: false,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cep",
                label: "CEP",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "contato",
                label: "Contato",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "telefone",
                label: "Telefone",
                type: "telefone",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "latitude",
                label: "Latitude",
                type: "text",
                required: false,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "longitude",
                label: "Longitude",
                type: "text",
                required: false,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "terminal",
                label: "Terminal",
                type: "select",
                options: [
                    {id: 0,text: 'Não'},
                    {id: 1,text: 'Sim'}
                ],
                required: true,
                value: 1,
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cidade",
                label: "Cidade",
                type: "join-autocomplete",
                propriedade: 'nome',
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "motorista",
                label: "Motorista",
                type: "join-autocomplete",
                propriedade: 'nome',
                required: false,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];

        let field;
        let srv;

        field = {
            alias: 'cidade', // Nome do elemento
            entity: 'cidade' // Nome da tabela join
        };

        srv = this.httpGetter.getService(field);

        this.setOptions(srv,field);

        field = {
            alias: 'motorista', // Nome do elemento
            entity: 'motorista' // Nome da tabela join
        };

        srv = this.httpGetter.getService(field);

        this.setOptions(srv,field);
    }
}
