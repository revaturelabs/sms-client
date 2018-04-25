import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrAssociateViewComponent } from './mgr-associate-view.component';

describe('MgrAssociateViewComponent', () => {
  let component: MgrAssociateViewComponent;
  let fixture: ComponentFixture<MgrAssociateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrAssociateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrAssociateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
