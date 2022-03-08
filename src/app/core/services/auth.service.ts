import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  //metodo para iniciar sesion
  login(username: string, password: string): Observable<any> {
    console.log(username, password);

    let respuesta: Array<any> | undefined = undefined;
    if (username === 'user' && password === 'root') {
      respuesta = [{ success: true, msg: 'Login correcto' }];
    } else if (username === 'user' && password !== 'root') {
      respuesta = [{ success: false, msg: 'Contraseña Incorrecta' }];
    } else if (username !== 'user') {
      respuesta = [{ success: false, msg: 'Usuario Incorrecto' }];
    }
    return of(respuesta);
  }
}
