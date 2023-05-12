import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-proxy-filtro',
  templateUrl: './proxy-filtro.component.html',
  styleUrls: ['./proxy-filtro.component.css'],
})
export class ProxyFiltroComponent implements OnInit {
  ngOnInit() {}
  componentImport(): Promise<any> {
    return import('../../pippo-filtro/pippo-filtro/pippo-filtro.component');
  }
}
