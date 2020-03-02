import { Injectable } from '@angular/core';
import { Viagem } from "../../../model";
import { BaseHttpService } from "../base-http.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class ViagemService extends BaseHttpService<Viagem>  {

  constructor(http: HttpClient, protected authService: AuthService) {
    super(http,authService,'/viagem');
  }
}
