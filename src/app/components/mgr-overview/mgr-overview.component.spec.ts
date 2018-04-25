import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOverviewComponent } from './manager-overview.component';

describe('ManagerOverviewComponent', () => {
  let component: ManagerOverviewComponent;
  let fixture: ComponentFixture<ManagerOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
