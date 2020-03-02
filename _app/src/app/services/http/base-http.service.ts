import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpResource } from "./http-resource";
import { AuthService } from "../auth.service";

import { environment } from '../../../environments/environment';
import { SearchParams } from "../../model";

export abstract class BaseHttpService <T> implements HttpResource<T>{
  public baseUrl = environment.api.url;
  public table: string;

  constructor(public http: HttpClient,protected authService: AuthService,private endPoint: string) {
    this.baseUrl += endPoint;
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl,data);
  }

  destroy(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`); //Para aplicar tranformações;
  }

  get(id: number): Observable<T> {
    return this.http.get<any>(`${this.baseUrl}/${id}`); //Para aplicar tranformações;
  }

  getByLike(searchString: string = "", searchparams: SearchParams = {"filter" : [],"order-by" : []}): Observable<any>{
    searchparams = { // Fazer um filtro padrao
      "filter" : [{
        "type" : "andx",
        "conditions" : [
          { "field" : "nome", "type" : "like", "value" : `%${ searchString }%` }
        ]
      }],
      "order-by" : []
    };
    return this.list(searchparams);
  }

  // @ts-ignore
  list(searchParams: SearchParams,page: number = 1): Observable<any> {
    return this.http.get<{data: Array<T>, meta: any }>(this.baseUrl + "?page=" + page + "&" + this.serialize(searchParams,''));
  }

  listResolver(params: SearchParams = { "filter": [], "order-by" : [] },page: number = 1): Observable<any>{
    return this.list(params,page);
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

  update(id: number, data: any): Observable<T> {
    return this.http.patch<any>(`${this.baseUrl}/${id}`, data);
  }

  serialize = function(obj, prefix) {
    var str = [],
        p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p,
            v = obj[p];
        str.push((v !== null && typeof v === "object") ?
            this.serialize(v, k) :
            encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  };
}
