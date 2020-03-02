import {ChangeDetectorRef, Injectable} from '@angular/core';
import { BaseHttpService } from "../base-http.service";
import {Privilegio, SearchParams, Usuario} from "../../../model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { environment } from "../../../../environments/environment";
import { UsuarioPerfilHttpService } from "../cadastro/usuario-perfil-http.service";
import { Router } from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrivilegioHttpService extends BaseHttpService<Privilegio> {

    uri: string = `${ environment.api.protocolo }://${ environment.api.host }`;

    constructor(http: HttpClient,
                public authService: AuthService,
                public usuarioPerfilHttpService: UsuarioPerfilHttpService,
                public router: Router) {
        super(http, authService, '/privilegio');
        this.table = 'privilegio';
    }

    findBy(searchParams, page: number = 1) {
        return this.http.get<any>(`${ this.uri }/services/privilegio` + "?page=" + page + "&" + this.serialize(searchParams, ''));
    }

  async permite(recurso,acao,retorna:boolean = false): Promise<any> {
    return new Promise((resolve,reject) => {
      let usuario:Usuario = this.authService.getUsuarioSession();
      let params = { usuario: usuario.id, recurso: recurso, acao: acao };
      let uri = `${ environment.api.protocolo }://${ environment.api.host }/services/permite?${ this.serialize( params,'') }`;
      this.http.get(uri).subscribe((response: any) => {
        if(!response.result)
        {
          if(retorna){
            resolve(response.result);
          }else{
            this.router.navigate(['admin','sem-permissao']);
            resolve();
          }
        }else{
          resolve(response.result);
        }
      });
    });
  };

  // Está sendo usado basta dar ctrl + f e pesquisar, apenas está sendo comentado temporariamente
  permiteMassa(recursos: any,acao: string): Observable<any> {
    let usuario:Usuario = this.authService.getUsuarioSession();
    let uri = `${ environment.api.protocolo }://${ environment.api.host }/services/permite-massa`;
    if(usuario){
      return this.http.post(uri,{ usuario: usuario.id,recursos: recursos, acao : acao });
    }else{
      return this.http.post(uri,{ usuario: null,recursos: recursos, acao : acao });
    }
  };
}
