import { Injectable } from '@angular/core';
import { Cidade } from "../../../model";
import { BaseHttpService } from "../base-http.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends BaseHttpService<Cidade>  {

  constructor(http: HttpClient, protected authService: AuthService) {
    super(http,authService,'/cidade');
  }

}
