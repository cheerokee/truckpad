import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioHttpService } from "../../../../../services/http/cadastro/usuario-http.service";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: UsuarioHttpService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Usuarios";
    this.controller = "usuario";
    this.icon = "fal fa-users";

    this.listView = {
      title: this.title,
      icon: this.icon,
      controller : this.controller,
      novo: {
        show : false,
        url: `${ this.current_url }/criar`
      },
      visualizar: {
        show : false,
        url: `${ this.current_url }/visualizar`
      },
      editar: {
        show : false,
        url: `${ this.current_url }/editar`
      },
      deletar: false
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
        { titulo : "Email", campo: "email" },
        { titulo : "Telefone", campo: "telefone" }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
