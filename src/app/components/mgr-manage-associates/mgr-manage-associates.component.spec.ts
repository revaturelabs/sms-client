import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from '../navbar/navbar.component';
import { ButtonToolbarComponent } from '../button-toolbar/button-toolbar.component';
import { ModalComponent } from '../modal/modal.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { FooterComponent } from '../footer/footer.component';
import { MgrManageAssociatesComponent } from './mgr-manage-associates.component';

import { AssociateService } from '../../services/associate.service';

describe('MgrManageAssociatesComponent', () => {
  let component: MgrManageAssociatesComponent;
  let fixture: ComponentFixture<MgrManageAssociatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MgrManageAssociatesComponent,
        NavbarComponent,
        ModalComponent,
        EditFormComponent,
        ButtonToolbarComponent,
        FooterComponent
      ],
      providers: [ AssociateService ],
      imports: [ RouterTestingModule, MatCheckboxModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrManageAssociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
