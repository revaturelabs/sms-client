import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAlertComponent } from './remove-alert.component';

describe('RemoveAlertComponent', () => {
  let component: RemoveAlertComponent;
  let fixture: ComponentFixture<RemoveAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
