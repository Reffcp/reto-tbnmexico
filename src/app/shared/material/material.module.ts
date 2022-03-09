import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class MaterialModule {}
