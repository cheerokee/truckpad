import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';
import { BaseHttpService } from "../base-http.service";
import { environment } from "../../../../environments/environment";
import { SearchParams, Usuario } from "../../../model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioHttpService extends BaseHttpService<Usuario> {

  public url = `${ environment.api.protocolo }://${ environment.api.host }`;

  constructor(http: HttpClient,
              protected authService: AuthService) {
    super(http,authService,'/usuario');
  }

  list(searchParams: SearchParams,page: number = 1): Observable<any> {
    return super.list(searchParams,page);
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

  get(id: number): Observable<Usuario> {
    return super.get(id);
  }

  create(data: Usuario): Observable<Usuario> {
    return super.create(data).pipe(
        tap(usuario => {
          this.saveSlug(usuario).subscribe(() => {});
        }),
    );
  }

  update(id: number, data: any): Observable<Usuario> {
    return super.update(id, data).pipe(
        tap(usuario => {
          this.saveSlug(usuario).subscribe(() => {});
        }),
    );
  }

  destroy(id: number): Observable<any> {
    return super.destroy(id);
  }

  enviaConfirmacao(usuario): Observable<any> {
    return this.http.post<any>(`${ this.url }/services/envia-confirmacao`, usuario);
  }

  enviaNotificacao(usuario): Observable<any> {
    return this.http.post<any>(`${ this.url }/services/envia-notificacao`, usuario);
  }

  saveSlug(usuario): Observable<any> {
    return this.http.post<any>(`${ this.url }/services/salvar-slug`, {
      id : usuario.id,
      field : 'nome',
      entity : 'Cadastro\\Entity\\Usuario'
    });
  }

  getClinicas(like: string = '',page: number = 1): Observable<any> {
    return this.http.get(`${ this.url }/services/clinicas?page=${ page }&${ (like != '' ) ? 'like = '+like:'' }`);
  }

  async checaEmail(email): Promise<boolean> {
    return new Promise((resolve,reject) => {
      let filter: SearchParams = {
        "filter" : [{
          'type': 'andx',
          'conditions': [
            {'field': 'email', 'type': 'eq', 'value': email}
          ],
          'where': 'and'
        }],
        "order-by" : []
      };

      this.list(filter).subscribe((response) => {
        resolve( response.total_items <= 0 );
      },(error) => {
        reject(false);
      });
    });
  };
}
