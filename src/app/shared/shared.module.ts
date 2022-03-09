import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [LayoutComponent, MaterialModule],
})
export class SharedModule {}
