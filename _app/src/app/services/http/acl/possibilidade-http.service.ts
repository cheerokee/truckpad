import { Injectable } from '@angular/core';
import { BaseHttpService } from "../base-http.service";
import { Possibilidade, SearchParams } from "../../../model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PossibilidadeHttpService extends BaseHttpService<Possibilidade>{

  private isAdmin: boolean;

  constructor(http: HttpClient,
              public authService: AuthService) {
    super(http,authService,'/possibilidade');
    this.table = 'possibilidade';
  }

  listResolver(params: any,page: number = 1): Observable<any>{
    let serachparams = { // Fazer um filtro padrao
      "filter" : [],
      "order-by" : []
    };
    return this.list(serachparams,page);
  }

  getByLike(searchString: string = "",searchparams: SearchParams = {}): Observable<any>{
    searchparams = { // Fazer um filtro padrao
      "filter" : [{
        "type" : "andx",
        "conditions" : [
          { "field" : "name", "type" : "like", "value" : `%${ searchString }%` }
        ]
      }],
      "order-by" : []
    };

    return super.getByLike(searchString,searchparams);
  }

  list(searchParams: SearchParams,page: number = 1): Observable<any> {
    return super.list(searchParams,page);
  }

  async listAll(serachparams: SearchParams = {"filter": [], "order-by": []}): Promise<any> {
    this.isAdmin = this.authService.isAdmin();
    if(!this.isAdmin){
      serachparams = {
        filter : [
          {
            type : 'innerjoin',
            field : 'recurso',
            alias : 'r'
          },
          {
            type : 'orx',
            conditions : [
              { type: 'isnull', alias : 'r', field : 'somente_admin' },
              { type: 'eq', alias : 'r', field : 'somente_admin', value : '0' }
            ],
            where : 'and'
          }
        ]
      };
    }

    return super.listAll(serachparams);
  }
}
