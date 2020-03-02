import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

import * as settings from 'src/app/store/settings';
import {Configuracao} from "../../../model";
import {PrivilegioHttpService} from "../../../services/http/acl/privilegio-http.service";

@Component({
  selector: 'smart-nav-footer',
  templateUrl: './nav-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavFooterComponent implements OnInit{

  configuracao: Configuracao;
  liberaChat : false;
  liberaLigacao : false;

  constructor(private store: Store<any>,private privilegioHttpService: PrivilegioHttpService) {}

  async ngOnInit() {
    // this.liberaChat     = await this.privilegioHttpService.permite('Chat Suporte','Visualizar',true);
    // this.liberaLigacao  = await this.privilegioHttpService.permite('Ligação','Visualizar',true);
  }

  saveStorage(field){
    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
    this.configuracao[field] = !this.configuracao[field];
    localStorage.setItem('configuracao',JSON.stringify(this.configuracao));
  };

  async toggleMinifyNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));

    this.store.dispatch(settings.toggleMinifyNavigation({ check: !this.configuracao.navegacao_minificada }));
    this.saveStorage('navegacao_minificada');
  }
}
