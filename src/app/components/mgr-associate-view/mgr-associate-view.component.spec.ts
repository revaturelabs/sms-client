import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MgrAssociateViewComponent } from './mgr-associate-view.component';
import { ButtonToolbarComponent } from '../button-toolbar/button-toolbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AssociateService } from '../../services/associate.service';
import { fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Associate } from '../../models/associate';

const associates: Associate[] = [
  {
    selected: false,
    id: 1,
    firstName: 'test1',
    lastName: 'test1',
    absent: true,
    trainerName: 'test1',
    batchName: 'test1',
    location: 'test1',
    skill: 'test1',
    marketingStartDate: new Date(),
    stagingStartDate: new Date(),
    confirmationDate: new Date(),
    projectStartDate: new Date(),
    stagingEndDate: new Date(),
    numberInterviews: 1,
    repanelCount: 2,
    clientName: 'test1'
  },
  {
    selected: false,
    id: 2,
    firstName: 'test2',
    lastName: 'test2',
    absent: false,
    trainerName: 'test2',
    batchName: 'test2',
    location: 'test2',
    skill: 'test2',
    marketingStartDate: new Date(),
    stagingStartDate: new Date(),
    confirmationDate: new Date(),
    projectStartDate: new Date(),
    stagingEndDate: new Date(),
    numberInterviews: 1,
    repanelCount: 2,
    clientName: 'test2'
  }
];

class AssociateMockService {
  getAssociatesInStaging(): Observable<Associate[]> {
    return of(associates);
  }

  getAssociate(id: number): Observable<Associate> {
    return of(associates[id-1]);
  }

  updateAssociate(id: number, associate: Associate) {
    associates[id-1] = associate;
    return of(associates[id-1]);
  }
}

describe('MgrAssociateViewComponent', () => {
  let component: MgrAssociateViewComponent;
  let fixture: ComponentFixture<MgrAssociateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrAssociateViewComponent, ButtonToolbarComponent ],
      providers: [
        {
          provide: AssociateService,
          useClass: AssociateMockService
        }
      ],
      imports: [ RouterTestingModule, FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrAssociateViewComponent);
    component = fixture.componentInstance;

    // the line below causes an error to be thrown due to
    // invoking ngOnInit which calls associate service and does async stuff
    // and returns an observable which is subscribed to

    // fixture.detectChanges();

    component.associate = {
      selected: false,
      id: 1,
      firstName: 'test1',
      lastName: 'test1',
      absent: true,
      trainerName: 'test1',
      batchName: 'test1',
      location: 'test1',
      skill: 'test1',
      marketingStartDate: new Date(),
      stagingStartDate: new Date(),
      confirmationDate: new Date(),
      projectStartDate: new Date(),
      stagingEndDate: new Date(),
      numberInterviews: 1,
      repanelCount: 2,
      clientName: 'test1'
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle edit mode', () => {
    let initBool = component.editingMode;
    component.toggleEditMode();
    expect(component.editingMode).not.toBe(initBool);
  });

  describe('when saving changes', () => {
    let now = new Date();
    beforeEach(() => {
      // make changes:
      component.newAttendance = false;
      component.newMarketingStartDate = now;
      component.newStagingStartDate = now;
      component.newStagingEndDate = now;
      component.newConfirmationDate = now;
      component.newProjectStartDate = now;
      component.newClientName = 'testClientName';
      component.newNumberInterviews = 3;
      component.newRepanelCount = 5;
      // save the changes:
      component.saveChanges();
    });

    it('should turn editing mode off', () => {
      expect(component.editingMode).toBe(false);
    });

    it('should change the associate data', () => {
      expect(component.associate.absent).toBe(false);
      expect(component.associate.marketingStartDate).toEqual(now);
      expect(component.associate.clientName).toEqual('testClientName');
      expect(component.associate.numberInterviews).toEqual(3);
    });
  });

  describe('when canceling changes', () => {
    let now = new Date();
    let makeChanges = function() {
      // make changes:
      component.newAttendance = false;
      component.newMarketingStartDate = now;
      component.newStagingStartDate = now;
      component.newStagingEndDate = now;
      component.newConfirmationDate = now;
      component.newProjectStartDate = now;
      component.newClientName = 'testClientName';
      component.newNumberInterviews = 3;
      component.newRepanelCount = 5;
      // cancel the changes:
      component.cancelChanges();
    }

    it('should reset the variables', () => {
      // capture state before changes:
      let compInit = component;
      makeChanges();
      // check that values are reset to defaults / initial values
      expect(component.newAttendance).toBe(compInit.newAttendance);
      expect(component.newMarketingStartDate).toEqual(compInit.newMarketingStartDate);
      expect(component.newClientName).toEqual(compInit.newClientName);
      expect(component.newNumberInterviews).toEqual(compInit.newNumberInterviews);
    });

    it('should NOT edit associate data', () => {
      // capture state before changes:
      let associateBefore = JSON.parse(JSON.stringify(component.associate));
      makeChanges();
      // check that associate data is not changed
      let associateAfter = JSON.parse(JSON.stringify(component.associate));
      expect(associateAfter).toEqual(associateBefore);
    });

    it('should turn editing mode off', () => {
      makeChanges();
      expect(component.editingMode).toBe(false);
    });
  })
});
