import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MotoristaHttpService } from "../../../../../services/http/cadastro/motorista-http.service";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";

@Component({
  selector: 'motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotoristaComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: MotoristaHttpService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Motoristas";
    this.controller = "motorista";
    this.icon = "fal fa-truck";

    this.listView = {
      title: this.title,
      icon: this.icon,
      controller : this.controller,
      novo: {
        show : true,
        url: `${ this.current_url }/criar`
      },
      visualizar: {
        show : false,
        url: `${ this.current_url }/visualizar`
      },
      editar: {
        show : true,
        url: `${ this.current_url }/editar`
      },
      deletar: true
    };

    this.filter = [
      {
        titulo: "Nome",
        name: "nome",
        component: "text",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        value: ""
      },
      {
        titulo: "CPF",
        name: "cpf",
        component: "text",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        value: ""
      },
      {
        titulo: "Ativo",
        name: "ativo",
        component: "select",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        options: [
          { value: 0, label: 'Não'},
          { value: 1, label: 'Sim'}
        ],
        value: ''
      }
    ];

    this.columns = [
      { titulo : "Nome", campo: "nome" },
      { titulo : "Telefone", campo: "telefone" },
      { titulo : "Data de Nascimento", campo: "data_nascimento", tipo: 'date' },
      { titulo : "CNH", campo: "cnh" },
      { titulo : "Tipo de CNH", campo: "tipo_cnh" },
      { titulo : "CPF", campo: "cpf" },
      { titulo : "Ativo", campo: "ativo", tipo: 'select', labels: ['Não', 'Sim'] }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
