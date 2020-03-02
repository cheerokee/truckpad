import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotifyMessageService {
  constructor() {}

  async success(text: string, timer: number = 1500): Promise<void> {
    return new Promise( resolve => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: text,
        showConfirmButton: false,
        timer: timer
      }).then(() => {
        resolve();
      });

    });
  }

  async error(text: string, timer: number = 1500): Promise<void> {
    return new Promise( resolve => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: text,
        showConfirmButton: false,
        timer: timer
      }).then(() => {
        resolve();
      });
    });
  }
}
