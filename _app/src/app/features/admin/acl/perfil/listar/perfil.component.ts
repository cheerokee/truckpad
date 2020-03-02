import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";
import { PerfilHttpService } from "../../../../../services/http/acl/perfil-http.service";

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfilComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: PerfilHttpService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Perfis";
    this.controller = "perfil";
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
        titulo: "Nome",
        name: "nome",
        component: "text",
        col : "4",
        strategy : "like", // eq,like,lt,rt,lte,rte
        value: ""
      }
    ];

    this.columns = [
      { titulo : "Nome", campo: "nome" },
      { titulo : "É admin?", campo: "admin", tipo: 'select', labels: ['Não', 'Sim']}
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }

}
