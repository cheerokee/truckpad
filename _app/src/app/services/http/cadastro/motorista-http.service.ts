import { Injectable } from '@angular/core';
import { Motorista } from "../../../model";
import { BaseHttpService } from "../base-http.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class MotoristaHttpService extends BaseHttpService<Motorista>  {

  constructor(http: HttpClient, protected authService: AuthService) {
    super(http,authService,'/motorista');
  }

}
