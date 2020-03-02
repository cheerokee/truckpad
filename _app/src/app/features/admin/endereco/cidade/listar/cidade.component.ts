import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CidadeService } from "../../../../../services/http/endereco/cidade.service";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";

@Component({
  selector: 'cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CidadeComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: CidadeService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Cidades";
    this.controller = "cidade";
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
        titulo: "Nome",
        name: "nome",
        component: "text",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        value: ""
      },
      {
        titulo: "Estado",
        name: "estado",
        component: "text",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        value: ""
      }
    ];

    this.columns = [
      { titulo : "Nome", campo: "nome" },
      { titulo : "Estado", campo: "estado" }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
