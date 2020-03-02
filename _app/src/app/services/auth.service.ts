import { Injectable } from '@angular/core';
import { Observable} from "rxjs/internal/Observable";
import { HttpClient} from "@angular/common/http";
import {SearchParams, Usuario} from "../model";

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public url = `${ environment.api.protocolo }://${ environment.api.host }`;

    me: Usuario = null;

    constructor(private http: HttpClient) {}

    login(user: {email: string, senha: string}): Observable<any> {
        return this.http
            .post<any>(`${ this.url }/service/auth`, user);
    }

    forgot(email: string): Observable<any> {
        return this.http
            .post<any>(`${ this.url }/services/recuperar-senha`, { email : email });
    }

    isAuth(): boolean {
        return true;
    }

    setAdmin(): Promise<boolean> {
        return new Promise<boolean>((resolve,reject) => {
            let usuario = this.getUsuarioSession();
            if(usuario){
                this.http.get<any>(`${ this.url }/services/is-admin?usuario=${ usuario.id }`).subscribe((response) => {
                    console.log(response);
                    localStorage.setItem('isadmin',response.result);
                    resolve(response.result);
                });
            }
        });
    }

    isAdmin(): boolean {
        return (localStorage.getItem('isadmin') == 'true')?true:false;
    }

    logout(){
        sessionStorage.removeItem('auth');
        sessionStorage.removeItem('configuracao');
    }

    setUsuarioSession(usuario) {
        sessionStorage.setItem('auth',JSON.stringify(usuario));
    }

    getUsuarioSession() {
        this.me = JSON.parse(sessionStorage.getItem('auth'));
        return this.me;
    }

    getFoto() {
        if(this.me){
            let src = (this.me.image) ? this.url + this.me.image : `/assets/img/sem_imagem.jpg`;
            return src ;
        }else{
            return `/assets/img/sem_imagem.jpg`;
        }
    }

    fileExists(urlToFile)
    {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', urlToFile, false);
        xhr.send();
        if (xhr.status == 404) {
            return false;
        } else {
            return true;
        }
    }
}
