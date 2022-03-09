import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatillosService {
  api = environment.urlApi;

  constructor(private http: HttpClient) {}

  //metodo para obtener un platillo aleatorio
  getPlatilloAleatorio() {
    return this.http.get<any>(`${this.api}random.php`);
  }

  //metodo para obtener un platillo por id
  getPlatillo(id: number) {
    return this.http.get<any>(`${this.api}lookup.php?i=${id}`);
  }
}
