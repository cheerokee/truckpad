import { Injectable } from '@angular/core';
import { BaseHttpService } from "../base-http.service";
import { Perfil, SearchParams } from "../../../model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PerfilHttpService extends BaseHttpService<Perfil>{
  table: string = 'perfil';
  constructor(http: HttpClient,
              public authService: AuthService) {
    super(http,authService,'/perfil');
  }

  listResolver(params: any,page: number = 1): Observable<any>{
    let serachparams = { // Fazer um filtro padrao
      "filter" : [],
      "order-by" : []
    };
    return this.list(serachparams,page);
  }

  list(searchParams: SearchParams,page: number = 1): Observable<any> {
    return super.list(searchParams,page);
  }

  async listAll(serachparams: SearchParams = { "filter" : [], "order-by" : [] }): Promise<any> {
    return new Promise<any>(async (resolve) => {
      let isAdmin = this.authService.isAdmin();
      if(!isAdmin)
        serachparams = {
          filter : [
            {
              type : 'isnull',
              field : 'admin'
            }
          ]
        };

      var values: Object[]  = [];
      this.list(serachparams).subscribe((response) => {
        let page_total = response.page_count;

        for(let entity of response._embedded[this.table]){
          values.push(entity);
        }

        if(page_total > 1)
        {
          let page_current = 2;

          while(page_current <= page_total){
            this.list(serachparams,page_current).subscribe((response) => {
              for(let entity of response._embedded[this.table]){
                values.push(entity);
              }

              if(page_current >= page_total){

                resolve(values);
              }
            });
            page_current++;
          }
        }else{
          resolve(values);
        }
      });
    });
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

}
