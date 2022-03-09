import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatSidenavModule],
  exports: [MatIconModule, MatSidenavModule],
})
export class MaterialModule {}
