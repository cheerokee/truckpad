import { Injectable } from '@angular/core';
import { Veiculo } from "../../../model";
import { BaseHttpService } from "../base-http.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class VeiculoService extends BaseHttpService<Veiculo>  {

  constructor(http: HttpClient, protected authService: AuthService) {
    super(http,authService,'/veiculo');
  }

}
