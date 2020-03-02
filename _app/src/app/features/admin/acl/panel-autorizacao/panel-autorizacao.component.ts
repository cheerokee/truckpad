import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import {PrivilegioHttpService} from "../../../../services/http/acl/privilegio-http.service";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'panel-autorizacao',
  templateUrl: './panel-autorizacao.component.html',
  styleUrls: ['./panel-autorizacao.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelAutorizacaoComponent implements OnInit {

  public tab: string;
  public isAdmin: boolean;

  constructor(public router: Router,
              public changeRef: ChangeDetectorRef,
              private location: Location,
              private authService: AuthService,
              private privilegioHttpService: PrivilegioHttpService) {
  }

  async ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    await this.privilegioHttpService.permite('Painel de Autorização','Visualizar');
    let tab = localStorage.getItem('panel-autorizacao-tab');
    this.tab = (tab) ? tab : 'panel-privilegio';
    this.changeRef.detectChanges();
  }

  tabChange(tab) {
    localStorage.setItem('panel-autorizacao-tab',tab);
    this.router.navigateByUrl(this.router.url);
  }
}
