import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyFiltroComponent } from './proxy-filtro/proxy-filtro.component';
import { RouterModule } from '@angular/router';
import { HostComponentLoaderDirective } from '../app-host.directive';

@NgModule({
  declarations: [ProxyFiltroComponent, HostComponentLoaderDirective],
  exports: [ProxyFiltroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'right',
        loadChildren: loadChildren('pippdsfo'),
      },
    ]),
  ],
})
export class ProxyFiltroModule {}

export function loadChildren(customer: string): () => Promise<any> {
  switch (customer) {
    case 'pippo':
      return () =>
        import('../pippo-filtro/pippo-filtro.module').then(
          (m) => m.PippoFiltroModule
        );
    default:
      return () =>
        import('../default-filtro/default-filtro.module').then(
          (m) => m.DefaultFiltroModule
        );
  }
}
