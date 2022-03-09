import { PlatillosService } from './../../core/services/platillos.service';
import { Platillo, Platillos } from './../../core/models/platillo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-platillo',
  templateUrl: './detalle-platillo.component.html',
  styleUrls: ['./detalle-platillo.component.scss'],
})
export class DetallePlatilloComponent implements OnInit {
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

  constructor(
    private platilloService: PlatillosService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((params) => {
      this.getPlatillo(params['id']);
    });
  }

  //metodo para obtener un platillo aleatorio
  getPlatillo(id: number) {
    this.platilloService.getPlatillo(id).subscribe((platillo: Platillos) => {
      this.platillo = platillo.meals[0];
    });
  }
}
