import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceReportComponent } from './attendance-report.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ButtonToolbarComponent } from '../button-toolbar/button-toolbar.component';
import { RouterTestingModule } from '@angular/router/testing';

import { AssociateService } from '../../services/associate.service';

describe('AttendanceReportComponent', () => {
  let component: AttendanceReportComponent;
  let fixture: ComponentFixture<AttendanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceReportComponent, NavbarComponent, ButtonToolbarComponent ],
      imports: [ RouterTestingModule ],
      providers: [ AssociateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change report duration', () => {
    const duration = 'this week';
    component.changeReportDuration(duration);
    expect(component.reportDuration).toEqual(duration);
  });
});
