import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFiltroComponent } from './default-filtro/default-filtro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: DefaultFiltroComponent }]),
    CommonModule,
  ],
  declarations: [DefaultFiltroComponent],
  exports:[DefaultFiltroComponent]
})
export class DefaultFiltroModule {}
