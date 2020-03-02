import {Injectable, OnInit} from '@angular/core';
import { BaseHttpService } from "../base-http.service";
import {Acao, Configuracao, SearchParams, Usuario} from "../../../model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth.service";
import { Observable } from "rxjs";
import * as settings from "../../../store/settings";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoHttpService extends BaseHttpService<Configuracao> implements OnInit{
  table: string = 'configuracao';
  clinica: Usuario;

  vm$ = this.store.select(settings.selectSettingsState);
  private _configuracao: any;

  constructor(http: HttpClient,
              public authService: AuthService,
              private store: Store<any>) {
    super(http,authService,`/configuracao`);

  }

  async ngOnInit() {
    this.configuracao = await this.loadConfiguracao();
  }

  async loadConfiguracao(): Promise<Configuracao> {
    return new Promise<Configuracao>((resolve,reject) => {
      let searchParams: SearchParams = {
        "filter" : [],
        "order-by" : []
      };

      let configuracao = null;

      this.list(searchParams).subscribe(async (response) => {
          if(response.total_items > 0){
            configuracao = response._embedded.configuracao[0];
          }else{
            configuracao = await this.salvaConfiguracao();
          }
        resolve(configuracao);
      }, error => {
        console.log(error);
        reject(null);
      });
    });
  }

  async salvaConfiguracao(): Promise<Configuracao> {
    return new Promise<Configuracao>((resolve,reject) => {
      this.create({}).subscribe((configuracao) => {
        resolve(configuracao);
      },error => {
        console.log(error);
        reject();
      });
    });
  }

  update(id: number, data: any): Observable<Configuracao> {
    return super.update(id, data);
  }

  async autoSet() {
    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
    if(!this.configuracao)
      this.configuracao = await this.loadConfiguracao();

    if(!this.configuracao)
      return;

    this.toggleFixedHeader(this.configuracao.cabecalho_fixo);
    this.toggleFixedNavigation(this.configuracao.navegacao_fixa);
    this.toggleMinifyNavigation(this.configuracao.navegacao_minificada);
    this.toggleHideNavigation(this.configuracao.esconder_navegacao);
    this.toggleTopNavigation(this.configuracao.navegacao_topo);
    this.toggleBoxedLayout(this.configuracao.layout_caixa);
    this.togglePushContent(this.configuracao.conteudo_envio);
    this.toggleNoOverlay(this.configuracao.sem_sobreposicao);
    this.toggleOffCanvas(this.configuracao.off_canvas);
    this.toggleBiggerContentFont(this.configuracao.fonte_conteudo_maior);
    this.toggleHighContrastText(this.configuracao.texto_contraste);
    this.toggleDaltonism(this.configuracao.daltonimsmo);
    this.togglePreloaderInsise(this.configuracao.pre_carregamento_dentro);
    this.toggleCleanPageBackground(this.configuracao.limpar_fundo_pagina);
    this.toggleHideNavigationIcons(this.configuracao.ocultar_icone_navegacao);
    this.toggleDisableCSSAnimation(this.configuracao.desabilitar_animacao);
    this.toggleHideInfoCard(this.configuracao.ocultar_cartao_informacao);
    this.toggleLeanSubheader(this.configuracao.subtitulo_lean);
    this.toggleHierarchicalNavigation(this.configuracao.navegacao_hierarquica);
    this.setGlobalFontSize(this.configuracao.tamanho_fonte);
  }

  async salvaStoreConfiguracao(){
    this.configuracao = await this.loadConfiguracao();
    this.vm$.subscribe((response) => {
      let configuracao = {
        cabecalho_fixo : ( response.fixedHeader ) ? 1 : 0,
        navegacao_fixa : ( response.fixedNavigation ) ? 1 : 0,
        navegacao_minificada : ( response.minifyNavigation ) ? 1 : 0,
        esconder_navegacao : ( response.hideNavigation ) ? 1 : 0,
        navegacao_topo : ( response.topNavigation ) ? 1 : 0,
        layout_caixa : ( response.boxedLayout ) ? 1 : 0,
        conteudo_envio : ( response.pushContent ) ? 1 : 0,
        sem_sobreposicao : ( response.noOverlay ) ? 1 : 0,
        off_canvas : ( response.offCanvas ) ? 1 : 0,
        fonte_conteudo_maior : ( response.biggerContentFont ) ? 1 : 0,
        texto_contraste : ( response.highContrastText ) ? 1 : 0,
        daltonimsmo : ( response.daltonism ) ? 1 : 0,
        pre_carregamento_dentro : ( response.preloaderInside ) ? 1 : 0,
        limpar_fundo_pagina : ( response.cleanPageBackground ) ? 1 : 0,
        ocultar_icone_navegacao : ( response.hideNavigationIcons ) ? 1 : 0,
        desabilitar_animacao : ( response.disableCSSAnimation ) ? 1 : 0,
        ocultar_cartao_informacao : ( response.hideInfoCard ) ? 1 : 0,
        subtitulo_lean : ( response.leanSubheader ) ? 1 : 0,
        navegacao_hierarquica : ( response.hierarchicalNavigation ) ? 1 : 0,
        tamanho_fonte : response.globalFontSize
      };

      this.update(this.configuracao.id,configuracao).subscribe((response) => {
        this.setConfiguracaoStorage(response);
      });
    });
  }

  setConfiguracaoStorage(configuracao: Configuracao){
    localStorage.setItem('configuracao', JSON.stringify(configuracao));
  }

  toggleFixedHeader(check: any,save = false) {
    this.store.dispatch(settings.toggleFixedHeader({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleFixedNavigation(check: any,save = false) {
    this.store.dispatch(settings.toggleFixedNavigation({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleMinifyNavigation(check: any,save = false) {
    this.store.dispatch(settings.toggleMinifyNavigation({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleHideNavigation(check: any,save = false) {
    this.store.dispatch(settings.toggleHideNavigation({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleTopNavigation(check: any,save = false) {
    this.store.dispatch(settings.toggleTopNavigation({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleBoxedLayout(check: any,save = false) {
    this.store.dispatch(settings.toggleBoxedLayout({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  togglePushContent(check: any,save = false) {
    this.store.dispatch(settings.togglePushContent({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleNoOverlay(check: any,save = false) {
    this.store.dispatch(settings.toggleNoOverlay({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleOffCanvas(check: any,save = false) {
    this.store.dispatch(settings.toggleOffCanvas({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleBiggerContentFont(check: any,save = false) {
    this.store.dispatch(settings.toggleBiggerContentFont({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleHighContrastText(check: any,save = false) {
    this.store.dispatch(settings.toggleHighContrastText({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleDaltonism(check: any,save = false) {
    this.store.dispatch(settings.toggleDaltonism({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  togglePreloaderInsise(check: any,save = false) {
    this.store.dispatch(settings.togglePreloaderInsise({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleCleanPageBackground(check: any,save = false) {
    this.store.dispatch(settings.toggleCleanPageBackground({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleHideNavigationIcons(check: any,save = false) {
    this.store.dispatch(settings.toggleHideNavigationIcons({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleDisableCSSAnimation(check: any,save = false) {
    this.store.dispatch(settings.toggleDisableCSSAnimation({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleHideInfoCard(check: any,save = false) {
    this.store.dispatch(settings.toggleHideInfoCard({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleLeanSubheader(check: any,save = false) {
    this.store.dispatch(settings.toggleLeanSubheader({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  toggleHierarchicalNavigation(check: any,save = false) {
    this.store.dispatch(settings.toggleHierarchicalNavigation({ check }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  setGlobalFontSize(size: string,save = false) {
    this.store.dispatch(settings.setGlobalFontSize({ size }));
    if(save)
      this.salvaStoreConfiguracao();
  }
  appReset($event: MouseEvent) {
    this.store.dispatch(settings.appReset());
    this.salvaStoreConfiguracao();
  }
  factoryReset($event: MouseEvent) {
    this.store.dispatch(settings.factoryReset());
    this.salvaStoreConfiguracao();
  }

  get configuracao(): any {
    return this._configuracao;
  }

  set configuracao(value: any) {
    this._configuracao = value;
  }
}
