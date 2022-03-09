import { Platillos, Platillo } from './../../core/models/platillo.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { IngredientesService } from './../../core/services/ingredientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillos-por-ingrediente',
  templateUrl: './platillos-por-ingrediente.component.html',
  styleUrls: ['./platillos-por-ingrediente.component.scss'],
})
export class PlatillosPorIngredienteComponent implements OnInit {
  platillos: Array<Platillo> = [];

  constructor(
    private ingredienteService: IngredientesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.obtenerIngrediente(params['id']);
    });
  }

  obtenerIngrediente(id: string): void {
    this.ingredienteService
      .getAlimentoByIngrediente(id)
      .subscribe((res: Platillos) => {
        this.platillos = res.meals;
      });
  }
}
