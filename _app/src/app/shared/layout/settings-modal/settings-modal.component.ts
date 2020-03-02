import {Component, TemplateRef, OnDestroy, ViewChild, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SubSink } from 'subsink';
import { SettingsModalService } from './settings-modal.service';

import { PrivilegioHttpService } from "../../../services/http/acl/privilegio-http.service";

@Component({
  selector: 'smart-settings-modal',
  templateUrl: './settings-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsModalComponent implements OnInit,OnDestroy {

  @ViewChild('template', {static: true}) template: any;

  modalRef: BsModalRef;
  liberaConfiguracao = false;
  private sub = new SubSink();

  constructor(sms: SettingsModalService,
              private modalService: BsModalService,
              private privilegioHttpService: PrivilegioHttpService) {
    this.sub.sink = sms.openSettings$.subscribe(() => {
      this.showModal();
    });
  }

  async openModal($event: MouseEvent) {
    $event.preventDefault();
    this.showModal();
  }

  private showModal() {
    this.modalRef = this.modalService.show(this.template, {
      class: 'modal-dialog-right modal-md'
    });
  }

  async ngOnInit(){
    //this.liberaConfiguracao = await this.privilegioHttpService.permite('ConfiguracaoLayout','Visualizar',true);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
