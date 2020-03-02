import {Component, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';

import * as settings from 'src/app/store/settings';
import {ConfiguracaoHttpService} from "../../../services/http/configuracao/configuracao-http.service";
import {Configuracao} from "../../../model";

@Component({
  selector: 'smart-settings-shortcut',
  templateUrl: './settings-shortcut.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsShortcutComponent {

  configuracao: any;

  constructor(private store: Store<any>,private configuracaoHttpService: ConfiguracaoHttpService) { }

  saveStorage(field){
    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
    this.configuracao[field] = !this.configuracao[field];
    localStorage.setItem('configuracao',JSON.stringify(this.configuracao));
  };

  async toggleHideNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));

    this.store.dispatch(settings.toggleHideNavigation({ check : !this.configuracao.esconder_navegacao}));
    this.saveStorage('esconder_navegacao');
  }

  async toggleMinifyNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
    this.store.dispatch(settings.toggleMinifyNavigation({ check : !this.configuracao.navegacao_minificada}));
    this.saveStorage('navegacao_minificada');
  }

  async toggleFixedNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
    this.store.dispatch(settings.toggleFixedNavigation({ check : !this.configuracao.navegacao_fixa}));
    this.saveStorage('navegacao_fixa');
  }
}
