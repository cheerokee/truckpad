import { Injectable } from '@angular/core';
import { BaseHttpService } from "../base-http.service";
import { Recurso, SearchParams } from "../../../model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecursoHttpService extends BaseHttpService<Recurso>{

  private isAdmin: boolean;

  constructor(http: HttpClient,
              public authService: AuthService) {
    super(http,authService,'/recurso');
    this.table = 'recurso';
  }

  getByLike(searchString: string = "",searchparams: SearchParams = {}): Observable<any>{
    searchparams = { // Fazer um filtro padrao
      "filter" : [{
        "type" : "andx",
        "conditions" : [
          { "field" : "nome", "type" : "like", "value" : `%${ searchString }%` }
        ]
      }],
      "order-by" : []
    };

    return super.getByLike(searchString,searchparams);
  }

  async listAll(serachparams: SearchParams = {"filter": [], "order-by": []}): Promise<any> {
    this.isAdmin = this.authService.isAdmin();

    if(!this.isAdmin){
      serachparams = {
        filter : [
          {
            type : 'orx',
            conditions : [
              { type: 'isnull', field : 'somente_admin' },
              { type: 'eq', field : 'somente_admin', value : '0' }
            ],
            where : 'and'
          }
        ]
      }
    }

    console.log(serachparams);

    return super.listAll(serachparams);
  }

}
