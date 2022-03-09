import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatalogosService {
  api = environment.urlApi;

  constructor(private http: HttpClient) {}

  obtenerAreas(): Observable<any> {
    return this.http.get<any>(`${this.api}list.php?a=list`);
  }
  obtenerIngredientes(): Observable<any> {
    return this.http.get<any>(`${this.api}list.php?i=list`);
  }
  obtenerCategorias(): Observable<any> {
    return this.http.get<any>(`${this.api}list.php?c=list`);
  }
}
