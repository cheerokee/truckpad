import { Injectable } from '@angular/core';
import { BaseHttpService } from "../base-http.service";
import { UsuarioPerfil, Usuario } from "../../../model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { NotifyMessageService } from "../../notify-message.service";
import { UsuarioHttpService } from "./usuario-http.service";
import { PerfilHttpService } from "../acl/perfil-http.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioPerfilHttpService extends BaseHttpService<UsuarioPerfil>{
  constructor(http: HttpClient,
              private notifyMessage: NotifyMessageService,
              private usuarioHttp: UsuarioHttpService,
              public authService: AuthService,
              private perfilHttpService: PerfilHttpService) {
    super(http,authService,'/usuario-perfil');
    this.table = 'usuario-perfil';
  }

  async salvarPerfil(usuario: Usuario ,perfil_nome: string): Promise<boolean> {
    return new Promise<any>(( resolve,reject ) => {
      this.perfilHttpService.getByLike(perfil_nome).subscribe((response) => {
        //Verifica se foi encontrado o perfi
        if(response.total_items == 0)
          reject();

        let perfil = response._embedded.perfil[0];

        let usuario_perfil: UsuarioPerfil = {
          usuario: usuario.id,
          perfil: perfil.id
        };

        this.create(usuario_perfil).subscribe((response) => {
          resolve(true);
        },(error) => {
          reject();
        });
      });
    });
  }
}
