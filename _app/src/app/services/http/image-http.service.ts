import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageHttpService {
  public url = `${ environment.api.protocolo }://${ environment.api.host }`;

  constructor(private http: HttpClient) {}

  saveCropImage(data): Observable<any> {
    return this.http.post<any>(`${this.url}/services/salvar-imagem`, data);
  }
}
