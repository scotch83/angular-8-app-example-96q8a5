import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProxyFiltroModule } from './proxy-filtro/proxy-filtro.module';
import { RouterModule } from '@angular/router';
import { ListaModule } from './lista/lista.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path:'',
        loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule)
      }
    ]),
    // ProxyFiltroModule,
    ListaModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
