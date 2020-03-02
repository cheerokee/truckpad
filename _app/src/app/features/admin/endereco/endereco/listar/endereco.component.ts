import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";
import { EnderecoService } from "../../../../../services/http/endereco/endereco.service";

@Component({
  selector: 'endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnderecoComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: EnderecoService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Endereços";
    this.controller = "endereco";
    this.icon = "fal fa-list";

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
        titulo: "Contato",
        name: "contato",
        component: "text",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        value: ""
      },
      {
        titulo: "Logradouro",
        name: "logradouro",
        component: "text",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        value: ""
      },
      {
        titulo: "Cidade",
        name: "cidade",
        joinField: "nome",
        component: "join-autocomplete",
        col : "4",
        strategy : "eq", // eq,like,lt,rt,lte,rte
        value: ""
      },
      {
        titulo: "Motorista",
        name: "motorista",
        joinField: "nome",
        component: "join-autocomplete",
        col : "4",
        strategy : "eq", // eq,like,lt,rt,lte,rte
        value: ""
      }
    ];

    this.columns = [
      { titulo : "Contato", campo: "contato" },
      { titulo : "Logradouro", campo: "logradouro" },
      { titulo : "Número", campo: "numero" },
      { titulo : "Cep", campo: "cep" },
      { titulo : "Cidade", campo: "cidade", tipo: "join", attr: 'nome'  },
      { titulo : "Motorista", campo: "motorista", tipo: "join", attr: 'nome'  },
      { titulo : "Terminal", campo: "terminal", tipo: 'select', labels: ['Não', 'Sim'] }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
