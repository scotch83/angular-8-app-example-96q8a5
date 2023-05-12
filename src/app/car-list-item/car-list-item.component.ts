import { Component, OnInit } from '@angular/core';
import { BaseListItemComponent } from '../base-list-item/base-list-item.component';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent extends BaseListItemComponent {

  constructor() {
    super()
   }

  ngOnInit() {
  }



}