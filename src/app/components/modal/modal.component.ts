import { Component, OnInit, OnDestroy, Input, ViewChild, ContentChild,
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

  @Input()
  titleText: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  @ContentChild(AddFormComponent) addForm: AddFormComponent;
  @ContentChild(EditFormComponent) editForm: EditFormComponent;
  @ContentChild(RemoveAlertComponent) removeAlert: RemoveAlertComponent;

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
