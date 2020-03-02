import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CrudBaseComponent } from "../../../base/crud-base/crud-base.component";
import {ViagemService} from "../../../../../services/http/transporte/viagem.service";

@Component({
  selector: 'viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViagemComponent extends CrudBaseComponent implements OnInit {

  constructor(public router: Router,
              public serviceHttp: ViagemService,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    super(router,serviceHttp,actRoute,changeRef);

    this.title = "Viagem";
    this.controller = "viagem";
    this.icon = "fal fa-list";

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
      deletar: true
    };

    this.filter = [
        {
            titulo: "Origem",
            name: "origem",
            joinField: "logradouro",
            component: "join-autocomplete",
            col : "4",
            strategy : "eq", // eq,like,lt,rt,lte,rte
            value: ""
        },
        {
            titulo: "Destino",
            name: "destino",
            joinField: "logradouro",
            component: "join-autocomplete",
            col : "4",
            strategy : "eq", // eq,like,lt,rt,lte,rte
            value: ""
        }
    ];

    this.columns = [
        { titulo : "Origem", campo: "origem", tipo: "join", attr: 'logradouro'  },
        { titulo : "Destino", campo: "destino", tipo: "join", attr: 'logradouro'  },
        { titulo : "Motorista Veículo", campo: "motorista_veiculo", tipo: "join", attr: 'nome'  },
        { titulo : "Operação", campo: "operacao", tipo: "select", labels: ['A Carregar','A Descarregar'] }
    ];

    this.serachparams = {
      "filter" : [],
      "order-by" : []
    };
  }
}
