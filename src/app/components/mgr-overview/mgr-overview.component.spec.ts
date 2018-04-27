import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrOverviewComponent } from './mgr-overview.component';

describe('ManagerOverviewComponent', () => {
  let component: MgrOverviewComponent;
  let fixture: ComponentFixture<MgrOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
