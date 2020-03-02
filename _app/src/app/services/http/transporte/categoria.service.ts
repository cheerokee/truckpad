import { Injectable } from '@angular/core';
import { Categoria } from "../../../model";
import { BaseHttpService } from "../base-http.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseHttpService<Categoria>  {

  constructor(http: HttpClient, protected authService: AuthService) {
    super(http,authService,'/categoria');
  }

}
