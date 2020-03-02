import { Injectable } from '@angular/core';
import { BaseHttpService } from "../base-http.service";
import { Acao, SearchParams } from "../../../model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AcaoHttpService extends BaseHttpService<Acao>{
    table: string = 'acao';

    constructor(http: HttpClient,
                public authService: AuthService) {
        super(http, authService, `/acao`);
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

  listAll(serachparams: SearchParams = { "filter" : [], "order-by" : [] }): Promise<any> {
    return new Promise<any>((resolve) => {
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
}
