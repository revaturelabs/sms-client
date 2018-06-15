import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusReportComponent } from './status-report.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StatusReportComponent', () => {
  let component: StatusReportComponent;
  let fixture: ComponentFixture<StatusReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatusReportComponent,
        NavbarComponent,
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
