import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MgrOverviewComponent } from './mgr-overview.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalComponent } from '../modal/modal.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { FooterComponent } from '../footer/footer.component';

import { AssociateService } from '../../services/associate.service';

describe('MgrOverviewComponent', () => {
  let component: MgrOverviewComponent;
  let fixture: ComponentFixture<MgrOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MgrOverviewComponent,
        NavbarComponent,
        ModalComponent,
        EditFormComponent,
        FooterComponent
      ],
      providers: [ AssociateService ],
      imports: [ RouterTestingModule, MatToolbarModule, MatSlideToggleModule ]
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
