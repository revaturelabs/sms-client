import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrOverviewComponent } from './mgr-overview.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalComponent } from '../modal/modal.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { AssociateService } from '../../services/associate.service';

describe('ManagerOverviewComponent', () => {
  let component: MgrOverviewComponent;
  let fixture: ComponentFixture<MgrOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MgrOverviewComponent, 
        NavbarComponent, 
        ModalComponent,
        EditFormComponent ],
      providers: [ AssociateService ],
      imports: [ RouterTestingModule ]
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
