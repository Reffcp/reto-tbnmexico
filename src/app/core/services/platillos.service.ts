import { Observable } from 'rxjs';
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
  getPlatilloAleatorio(): Observable<any> {
    return this.http.get<any>(`${this.api}random.php`);
  }

  //metodo para obtener un platillo por id
  getPlatillo(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}lookup.php?i=${id}`);
  }

  //metodo para obtener todos los platillos
  getPlatillos(): Observable<any> {
    return this.http.get<any>(`${this.api}search.php?s=`);
  }

  //metodo para obtener platillos por area
  getPlatillosArea(area: string): Observable<any> {
    return this.http.get<any>(`${this.api}filter.php?a=${area}`);
  }

  //metodo para obtener platillos por categoria
  getPlatillosCategoria(categoria: string): Observable<any> {
    return this.http.get<any>(`${this.api}filter.php?c=${categoria}`);
  }
}
