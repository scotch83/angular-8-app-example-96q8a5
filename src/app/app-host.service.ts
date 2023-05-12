import {
  ComponentFactoryResolver,
  Directive,
  Injectable,
  Injector,
  Input,
  NgModuleFactory,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable()
export class HostComponentLoaderService implements OnInit {
  private _appHostComponentLoader: Promise<any>;
  public get appHostComponentLoader(): Promise<any> {
    return this._appHostComponentLoader;
  }
  @Input()
  public set appHostComponentLoader(value: Promise<any>) {
    this._appHostComponentLoader = value;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  async ngOnInit(): Promise<void> {}

  async loadComponent(
    viewContainerRef: ViewContainerRef,
    component: Promise<any>
  ) {
    console.log(component);
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
