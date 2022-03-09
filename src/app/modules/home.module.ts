import { IngredientesService } from './../core/services/ingredientes.service';
import { IngredientesPopularesComponent } from './ingredientes-populares/ingredientes-populares.component';
import { DetallePlatilloComponent } from './detalle-platillo/detalle-platillo.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlatillosService } from 'src/app/core/services/platillos.service';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    DetallePlatilloComponent,
    IngredientesPopularesComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, HttpClientModule],
  providers: [PlatillosService, IngredientesService],
})
export class HomeModule {}
