import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-list-item',
  templateUrl: './base-list-item.component.html',
  styleUrls: ['./base-list-item.component.css'],
})
export class BaseListItemComponent implements OnInit {

  @Output()
  test = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateToDetail() {
    this.test.emit('ciccio');
  }
}
