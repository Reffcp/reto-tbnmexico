import { IngredientesService } from './../../core/services/ingredientes.service';
import { Router } from '@angular/router';
import { Ingrediente } from './../../core/models/ingredientes.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ingredientes-populares',
  templateUrl: './ingredientes-populares.component.html',
  styleUrls: ['./ingredientes-populares.component.scss'],
})
export class IngredientesPopularesComponent implements OnInit {
  // TODO: VARIABLES TABLA
  columnas: string[] = ['id', 'nombre'];
  dataSource!: MatTableDataSource<Ingrediente>;
  tablSize = 0;
  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;

  // TODO: VARIABLES GENERALES
  estadoMenu: string = '';

  constructor(
    private ingredientesService: IngredientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerIngrediente();
  }
  obtenerIngrediente(): void {
    this.ingredientesService.getIngredientes().subscribe((res) => {
      const ingredientes: Array<Ingrediente> = res.meals;
      this.dataSource = new MatTableDataSource(ingredientes);
      this.tablSize = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator1;
    });
  }
  cambiarTamanioMenu(evt: string): void {
    this.estadoMenu = evt;
  }
  mostrarPlatillos(nombre: string): void {}
}
