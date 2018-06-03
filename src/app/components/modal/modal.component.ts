import { Component, OnInit, OnDestroy, Input, ViewChild,
  ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { AddFormComponent } from '../add-form/add-form.component';
import { RemoveAlertComponent } from '../remove-alert/remove-alert.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  private componentRef: ComponentRef<{}>;
  private mappings = {
    'add': AddFormComponent,
    'edit': EditFormComponent,
    'remove': RemoveAlertComponent
  };

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  type: string;

  @Input()
  bootstrapId: string;

  @Input()
  titleText: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.type) {
      let componentType = this.getComponentType(this.type);
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  getComponentType(typeName: string) {
    let type = this.mappings[typeName];
    return type || AddFormComponent;
  }

}
