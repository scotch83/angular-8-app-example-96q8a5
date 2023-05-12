import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ProxyFiltroModule } from '../proxy-filtro/proxy-filtro.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BackofficeComponent,
      },
    ]),
    ProxyFiltroModule,
    CommonModule,
  ],
  declarations: [BackofficeComponent],
})
export class BackofficeModule {}
