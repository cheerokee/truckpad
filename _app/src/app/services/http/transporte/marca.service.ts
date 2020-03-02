import { Injectable } from '@angular/core';
import { Marca } from "../../../model";
import { BaseHttpService } from "../base-http.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends BaseHttpService<Marca>  {

  constructor(http: HttpClient, protected authService: AuthService) {
    super(http,authService,'/marca');
  }

}
