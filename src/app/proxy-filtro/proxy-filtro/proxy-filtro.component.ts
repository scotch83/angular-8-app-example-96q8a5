import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HostComponentLoaderService } from '../../app-host.service';

@Component({
  selector: 'app-proxy-filtro',
  templateUrl: './proxy-filtro.component.html',
  styleUrls: ['./proxy-filtro.component.css'],
})
export class ProxyFiltroComponent implements OnInit {
  constructor(
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private appHostService: HostComponentLoaderService
  ) {}
  ngOnInit() {
    this.appHostService.loadComponent(this.vcref, this.componentImport())
  }
  componentImport(): Promise<any> {
    return import('../../pippo-filtro/pippo-filtro/pippo-filtro.component');
  }
}
