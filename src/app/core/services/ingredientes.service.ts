import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IngredientesService {
  api = environment.urlApi;

  constructor(private http: HttpClient) {}

  //metodo para obtener los ingredientes
  getIngredientes() {
    return this.http.get<any>(`${this.api}list.php?i=list`);
  }
}
