import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../../../services/auth.service";
import { HttpGetter } from "../../../../../services/http-getter";
import {FormBase} from "../../../base/form-base/form-base";
import {Validators} from "@angular/forms";
import {ViagemService} from "../../../../../services/http/transporte/viagem.service";

@Component({
    selector: 'form-entity',
    templateUrl: './form-entity.component.html',
    styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent extends FormBase implements OnInit {

    constructor(public service: ViagemService,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService ) {
        super(service,http,httpGetter,authService);
        this.controller = "viagem";
        this.returnPath = `/admin/transporte/${ this.controller }`;
        this.elements = [
            {
                name: "origem",
                label: "Origem",
                type: "join-autocomplete",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "destino",
                label: "Destino",
                type: "join-autocomplete",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "motorista_veiculo",
                label: "Motorista / Veículo",
                type: "join-autocomplete",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "status",
                label: "Status",
                type: "select",
                options: [
                    {id: 0,text: 'Aguardando'},
                    {id: 1,text: 'A Caminho'},
                    {id: 2,text: 'Finalizado'}
                ],
                required: true,
                value: 1,
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];

        let field;
        let srv;

        field = {
            alias: 'origem', // Nome do elemento
            entity: 'endereco' // Nome da tabela join
        };

        srv = this.httpGetter.getService(field);

        this.setOptions(srv,field);

        field = {
            alias: 'destino', // Nome do elemento
            entity: 'endereco' // Nome da tabela join
        };

        srv = this.httpGetter.getService(field);

        this.setOptions(srv,field);

        field = {
            alias: 'motorista_veiculo', // Nome do elemento
            entity: 'motorista_veiculo' // Nome da tabela join
        };

        srv = this.httpGetter.getService(field);

        this.setOptions(srv,field);
    }
}
