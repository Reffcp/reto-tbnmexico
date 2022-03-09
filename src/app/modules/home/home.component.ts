import { PlatillosService } from './../../core/services/platillos.service';
import { Platillo, Platillos } from './../../core/models/platillo.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  platillo: Platillo = {
    idMeal: 1,
    strMeal: '',
    strDrinkAlternate: '',
    strCategory: '',
    strArea: '',
    strInstructions: '',
    strMealThumb: '',
    strTags: '',
    strYoutube: '',
    strSource: '',
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  };

  constructor(private platilloService: PlatillosService) {}

  ngOnInit(): void {
    this.getPlatilloAleatorio();
  }

  //metodo para obtener un platillo aleatorio
  getPlatilloAleatorio() {
    this.platilloService
      .getPlatilloAleatorio()
      .subscribe((platillo: Platillos) => {
        this.platillo = platillo.meals[0];
      });
  }

  //metodo para recortar el texto de la receta
  recortarTexto(texto: string): string {
    if (texto.length > 200) {
      return texto.substring(0, 200) + '...';
    } else {
      return texto;
    }
  }
}
