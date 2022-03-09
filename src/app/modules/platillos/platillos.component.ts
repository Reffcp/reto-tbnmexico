import { Platillos } from './../../core/models/platillo.interface';
import { IngredientesService } from './../../core/services/ingredientes.service';
import { Router } from '@angular/router';
import { CatalogosService } from './../../core/services/catalogos.service';
import { PlatillosService } from 'src/app/core/services/platillos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss'],
})
export class PlatillosComponent implements OnInit {
  //tabla
  columnas: string[] = ['id', 'nombre'];
  dataSource!: MatTableDataSource<any>;
  tableSize = 0;
  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;

  platillos: Array<any> = [];

  //filtros
  area = '';
  categorias = '';
  ingredientes = '';

  //filtros
  catAreas: Array<any> = [];
  catCategorias: Array<any> = [];
  catIngredientes: Array<any> = [];

  constructor(
    private platilloService: PlatillosService,
    private catatalogosService: CatalogosService,
    private router: Router,
    private ingredientesService: IngredientesService
  ) {}

  ngOnInit(): void {
    this.obtenerCatalogos();
    this.obtenerPlatillosAleatorios();
    this.obtenerPlatillos();
    setInterval(() => {
      this.obtenerPlatillosAleatorios();
    }, 300000);
  }
  obtenerCatalogos(): void {
    this.catatalogosService.obtenerAreas().subscribe((res) => {
      this.catAreas = res.meals;
    });
    this.catatalogosService.obtenerCategorias().subscribe((res) => {
      this.catCategorias = res.meals;
    });
    this.ingredientesService.getIngredientes().subscribe((res) => {
      this.catIngredientes = res.meals;
    });
  }
  obtenerPlatillosAleatorios(): void {
    this.platillos = [];
    for (let x = 0; x < 5; x++) {
      this.platilloService
        .getPlatilloAleatorio()
        .subscribe((res: Platillos) => {
          this.platillos.push(res.meals[0]);
        });
    }
  }
  obtenerPlatillos(): void {
    this.platilloService.getPlatillos().subscribe((res) => {
      const platillos: Array<any> = res.meals;
      this.dataSource = new MatTableDataSource(platillos);
      this.tableSize = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator1;
    });
  }

  //usamos este metodo para filtrar los ingredientes
  filterTable(id: number): void {
    switch (id) {
      case 1:
        this.platilloService.getPlatillosArea(this.area).subscribe((res) => {
          const platillos: Array<any> = res.meals;
          this.dataSource = new MatTableDataSource(platillos);
          this.tableSize = this.dataSource.data.length;
          this.dataSource.paginator = this.paginator1;
        });
        break;
      case 2:
        this.platilloService
          .getPlatillosCategoria(this.categorias)
          .subscribe((res) => {
            const platillos: Array<any> = res.meals;
            this.dataSource = new MatTableDataSource(platillos);
            this.tableSize = this.dataSource.data.length;
            this.dataSource.paginator = this.paginator1;
          });
        break;
      case 3:
        this.ingredientesService
          .getAlimentoByIngrediente(
            this.ingredientes.replace(/ /g, '_').toLowerCase()
          )
          .subscribe((res) => {
            const platillos: Array<any> = res.meals;
            this.dataSource = new MatTableDataSource(platillos);
            this.tableSize = this.dataSource.data.length;
            this.dataSource.paginator = this.paginator1;
          });
        break;
    }
  }
  LimpiarFiltro(): void {
    this.area = '';
    this.categorias = '';
    this.ingredientes = '';
    this.obtenerPlatillos();
  }

  verDetalle(id: string): void {
    this.router.navigate(['/detalle-platillo', id]);
  }
}
