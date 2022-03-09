import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetalertService {
  constructor() {}

  basicAlert(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      showCloseButton: true,
      showConfirmButton: true,
    });
  }

  basicAlertError(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      showCloseButton: true,
      showConfirmButton: true,
    });
  }
}
