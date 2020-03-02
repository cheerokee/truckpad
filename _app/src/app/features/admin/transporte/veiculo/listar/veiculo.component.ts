import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";
import {VeiculoService} from "../../../../../services/http/transporte/veiculo.service";

@Component({
  selector: 'veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VeiculoComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: VeiculoService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Veículos";
    this.controller = "veiculo";
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
            titulo: "Placa",
            name: "placa",
            component: "text",
            col : "4",
            strategy : "like", // eq,like,lt,rt,lte,rte
            value: ""
        },
        {
            titulo: "Modelo",
            name: "modelo",
            component: "text",
            col : "4",
            strategy : "like", // eq,like,lt,rt,lte,rte
            value: ""
        },
        {
            titulo: "Cor",
            name: "cor",
            component: "text",
            col : "4",
            strategy : "like", // eq,like,lt,rt,lte,rte
            value: ""
        },
        {
            titulo: "Categoria",
            name: "categoria",
            joinField: "nome",
            component: "join-select",
            col : "4",
            strategy : "eq", // eq,like,lt,rt,lte,rte
            value: ""
        },
        {
            titulo: "Marca",
            name: "marca",
            joinField: "nome",
            component: "join-select",
            col : "4",
            strategy : "eq", // eq,like,lt,rt,lte,rte
            value: ""
        }
    ];

    this.columns = [
        { titulo : "Placa", campo: "placa" },
        { titulo : "Modelo", campo: "modelo" },
        { titulo : "Cor", campo: "cor" },
        { titulo : "Categoria", campo: "categoria", tipo: "join", attr: 'nome' },
        { titulo : "Marca", campo: "marca", tipo: "join", attr: 'nome' }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
