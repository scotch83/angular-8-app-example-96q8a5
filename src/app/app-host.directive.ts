import {
  ComponentFactoryResolver,
  Directive,
  Injector,
  Input,
  NgModuleFactory,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Directive({ selector: '[appHostComponentLoader]' })
export class HostComponentLoaderDirective implements OnInit {
  private _appHostComponentLoader: Promise<any>;
  public get appHostComponentLoader(): Promise<any> {
    return this._appHostComponentLoader;
  }
  @Input()
  public set appHostComponentLoader(value: Promise<any>) {
    this._appHostComponentLoader = value;
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  async ngOnInit(): Promise<void> {
    if (this._appHostComponentLoader)
      await this.loadComponent(this._appHostComponentLoader);
  }

  async loadComponent(component: Promise<any>) {
    console.log(component);
    this.viewContainerRef.clear();
    try {
      const lazyLoaded = await component;
      const keys = Object.keys(lazyLoaded);
      for (let key of keys) {
        console.log(key);
        if (key.endsWith('Component')) {
          let componentFactory =
            this.componentFactoryResolver.resolveComponentFactory(
              lazyLoaded[key]
            );
          const viewContainerRef = this.viewContainerRef;
          viewContainerRef.clear();
          return viewContainerRef.createComponent(componentFactory);
        }
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }
}
