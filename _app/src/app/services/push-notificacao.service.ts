import { Injectable } from '@angular/core';
import {PushNotificationOptions, PushNotificationService} from "ngx-push-notifications";

@Injectable({
  providedIn: 'root'
})
export class PushNotificacaoService {

  constructor(private _pushNotificationService: PushNotificationService) { }

  async permitido(): Promise<boolean> {
    return new Promise((resolve) => {
      this._pushNotificationService.requestPermission().subscribe((response) => {
        resolve(this._pushNotificationService.isPermissionGranted(response));
      });
    });
  }

  mostraNotificacoes(titulo,corpo) {
    const options = new PushNotificationOptions();
    options.body = corpo;

    this._pushNotificationService.create(titulo, options).subscribe((notif) => {
          // if (notif.event.type === 'show') {
          //   console.log('onshow');
          //   setTimeout(() => {
          //     notif.notification.close();
          //   }, 5000);
          // }

          if (notif.event.type === 'click') {
            console.log('click');
            notif.notification.close();
          }

          if (notif.event.type === 'close') {
            console.log('close');
          }
        },
        (err) => {
          console.log(err);
        });
  }
}
