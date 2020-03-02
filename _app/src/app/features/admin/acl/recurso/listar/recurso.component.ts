import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from "@angular/router";
import {CrudBaseComponent} from "../../../base/crud-base/crud-base.component";
import { RecursoHttpService } from "../../../../../services/http/acl/recurso-http.service";

@Component({
  selector: 'recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecursoComponent extends CrudBaseComponent implements OnInit {
  constructor(public router: Router,
              public serviceHttp: RecursoHttpService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Recursos";
    this.controller = "recurso";
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
      { titulo : "Somente admin?", campo: "somente_admin", tipo: 'select', labels: ['Não', 'Sim']}
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
