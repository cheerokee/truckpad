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
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";
import { AcaoHttpService } from "../../../../../services/http/acl/acao-http.service";

@Component({
  selector: 'acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcaoComponent extends CrudBaseComponent implements OnInit {
  constructor(public router: Router,
              public serviceHttp: AcaoHttpService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Ações";
    this.controller = "acao";
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
      { titulo : "Nome", campo: "nome" }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
