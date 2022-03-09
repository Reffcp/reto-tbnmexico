import { PlatillosComponent } from './platillos/platillos.component';
import { DetallePlatilloComponent } from './detalle-platillo/detalle-platillo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { IngredientesPopularesComponent } from './ingredientes-populares/ingredientes-populares.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'detalle-platillo/:id',
        component: DetallePlatilloComponent,
      },
      {
        path: 'ingredientes-populares',
        component: IngredientesPopularesComponent,
      },
      {
        path: 'platillos',
        component: PlatillosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
