import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as settings from 'src/app/store/settings';
import { ConfiguracaoHttpService } from "../../../services/http/configuracao/configuracao-http.service";
import { Configuracao } from "../../../model";

declare const $;

@Component({
  selector: 'smart-settings',
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit{

  campos: string[];
  vm$ = this.store.select(settings.selectSettingsState);

  constructor(private store: Store<any>, private configuracaoHttpService: ConfiguracaoHttpService) { }

  ngOnInit() {}
}
