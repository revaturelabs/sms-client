import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MgrAssociateViewComponent } from './mgr-associate-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AssociateService } from '../../services/associate.service';

class AssociateMockService {

}

describe('MgrAssociateViewComponent', () => {
  let component: MgrAssociateViewComponent;
  let fixture: ComponentFixture<MgrAssociateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrAssociateViewComponent ],
      providers: [ 
        {
          provide: AssociateService,
          useClass: AssociateMockService
        } 
      ], 
      imports: [ RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrAssociateViewComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
