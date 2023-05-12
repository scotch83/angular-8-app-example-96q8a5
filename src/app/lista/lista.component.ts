import { Component, OnInit, Output } from '@angular/core';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  
  @Output()
  itemSelected

  constructor() { 


  }

  ngOnInit() {
  }

  itemTemplate(){
    if (true)
    return {component: CarListItemComponent}
  }

  onTest(ciccio: string){
    console.log(ciccio)
  }

}