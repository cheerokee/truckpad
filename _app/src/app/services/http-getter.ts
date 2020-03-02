import { Injectable } from '@angular/core';
import { RecursoHttpService } from "./http/acl/recurso-http.service";
import { AcaoHttpService } from "./http/acl/acao-http.service";
import { PerfilHttpService } from "./http/acl/perfil-http.service";
import { PossibilidadeHttpService } from "./http/acl/possibilidade-http.service";
import { UsuarioHttpService } from "./http/cadastro/usuario-http.service";
import { MotoristaHttpService } from "./http/cadastro/motorista-http.service";
import {CategoriaService} from "./http/transporte/categoria.service";
import {MarcaService} from "./http/transporte/marca.service";
import {VeiculoService} from "./http/transporte/veiculo.service";
import {MotoristaVeiculoService} from "./http/cadastro/motorista-veiculo.service";
import {CidadeService} from "./http/endereco/cidade.service";
import {EnderecoService} from "./http/endereco/endereco.service";
import {ViagemService} from "./http/transporte/viagem.service";

@Injectable({
    providedIn: 'root'
})
export class HttpGetter {

    constructor(public recursoHttpService: RecursoHttpService,
                public acaoHttpService: AcaoHttpService,
                public perfilHttpService: PerfilHttpService,
                public possibilidadeHttpService: PossibilidadeHttpService,
                public usuarioHttpService: UsuarioHttpService,
                public motoristaHttpService: MotoristaHttpService,
                public categoriaService: CategoriaService,
                public marcaService: MarcaService,
                public veiculoService: VeiculoService,
                public motoristaVeiculoService: MotoristaVeiculoService,
                public cidadeService: CidadeService,
                public enderecoService: EnderecoService,
                public viagemService: ViagemService) {
    }

    getService(chave: any) {
        if(typeof chave === 'object')
            chave = chave.entity;

        let service = null;
        if(chave != '')
        {
            switch (chave) {
                case "recurso":
                    service = this.recursoHttpService;
                    break;
                case "acao":
                    service = this.acaoHttpService;
                    break;
                case "possibilidade":
                    service = this.possibilidadeHttpService;
                    break;
                case "heranca" :
                    service = this.perfilHttpService;
                    break;
                case "usuario" :
                    service = this.usuarioHttpService;
                    break;
                case "motorista" :
                    service = this.motoristaHttpService;
                    break;
                case "categoria" :
                    service = this.categoriaService;
                    break;
                case "marca" :
                    service = this.marcaService;
                    break;
                case "veiculo" :
                    service = this.veiculoService;
                    break;
                case "motorista-veiculo" :
                    service = this.motoristaVeiculoService;
                    break;
                case "cidade" :
                    service = this.cidadeService;
                    break;
                case "endereco" :
                    service = this.enderecoService;
                    break;
                case "viagem" :
                    service = this.viagemService;
                    break;
            }
        }

        return service;
    }
}
