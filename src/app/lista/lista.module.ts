import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { ListaService } from './lista.service';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],

  providers: [ListaService],
  declarations: [ListaComponent, CarListItemComponent],
  exports:[ListaComponent]
})
export class ListaModule { }