import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PossibilidadeHttpService } from "../../../../../services/http/acl/possibilidade-http.service";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";

@Component({
  selector: 'possibilidade',
  templateUrl: './possibilidade.component.html',
  styleUrls: ['./possibilidade.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PossibilidadeComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: PossibilidadeHttpService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Possibilidades";
    this.controller = "possibilidade";
    this.icon = "fal fa-space-shuttle";

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
        titulo: "Ação",
        name: "acao",
        joinField: "nome",
        component: "join-select",
        col : "4",
        strategy : "eq", // eq,like,lt,rt,lte,rte
        value: ""
      },
      {
        titulo: "Recurso",
        name: "recurso",
        joinField: "nome",
        component: "join-autocomplete",
        col : "4",
        strategy : "eq", // eq,like,lt,rt,lte,rte
        value: ""
      }
    ];

    this.columns = [
      { titulo : "Ação", campo: "acao", tipo: "join", attr: 'nome' },
      { titulo : "Recurso", campo: "recurso", tipo: "join", attr: 'nome' }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }

}
