import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatSidenavModule, MatCardModule],
  exports: [MatIconModule, MatSidenavModule, MatCardModule],
})
export class MaterialModule {}
