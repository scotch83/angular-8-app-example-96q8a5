import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PippoFiltroComponent } from './pippo-filtro/pippo-filtro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: PippoFiltroComponent }]),
    CommonModule,
  ],
  declarations: [PippoFiltroComponent],
})
export class PippoFiltroModule {}
