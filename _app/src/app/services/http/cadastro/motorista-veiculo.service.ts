import { Injectable } from '@angular/core';
import { MotoristaVeiculo } from "../../../model";
import { BaseHttpService } from "../base-http.service";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class MotoristaVeiculoService extends BaseHttpService<MotoristaVeiculo>  {

  constructor(http: HttpClient, protected authService: AuthService) {
    super(http,authService,'/motorista-veiculo');
  }

}
