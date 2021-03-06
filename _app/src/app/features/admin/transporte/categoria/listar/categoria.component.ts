import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriaService } from "../../../../../services/http/transporte/categoria.service";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";

@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: CategoriaService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Categorias";
    this.controller = "categoria";
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
        titulo: "Código",
        name: "codigo",
        component: "text",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        value: ""
      }
    ];

    this.columns = [
      { titulo : "Nome", campo: "nome" },
      { titulo : "Código", campo: "codigo" }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
