import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../../../services/auth.service";

import { HttpGetter } from "../../../../../services/http-getter";
import { FormBase } from "../../../base/form-base/form-base";
import { MotoristaHttpService } from "../../../../../services/http/cadastro/motorista-http.service";

@Component({
    selector: 'form-entity',
    templateUrl: './form-entity.component.html',
    styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent extends FormBase implements OnInit {

    constructor(public service: MotoristaHttpService,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService ) {
        super(service,http,httpGetter,authService);
        this.controller = "motorista";
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
                name: "telefone",
                label: "Telefone",
                type: "telefone",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "data_nascimento",
                label: "Data de Nascimento",
                type: "date",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cnh",
                label: "CNH",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cpf",
                label: "CPF",
                type: "cpf",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "tipo_cnh",
                label: "Tipo CNH",
                type: "select",
                options: [
                    {id: 'A',text: 'A - Moto'},
                    {id: 'B',text: 'B - Carro'},
                    {id: 'AB',text: 'AB - Carro + Moto'},
                    {id: 'D',text: 'D - Caminhão'},
                    {id: 'AD',text: 'AD - Caminhão + Moto'},
                    {id: 'E',text: 'E - Caminhão com Reboque, Carretas'},
                    {id: 'AE',text: 'AE - Caminhão com Reboque, Carretas + Moto'}
                ],
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "ativo",
                label: "Ativo",
                type: "select",
                options: [
                    {id: 0,text: 'Não'},
                    {id: 1,text: 'Sim'}
                ],
                required: true,
                value: 1,
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];
    }
}
