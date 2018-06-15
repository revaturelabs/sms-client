import { TestBed, inject } from '@angular/core/testing';
import { Associate } from '../models/associate';
import { AssociateService } from './associate.service';

let service: AssociateService;

describe('AssociateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociateService]
    });
    service = TestBed.get(AssociateService);
  });

  it('should be created', inject([AssociateService], (service: AssociateService) => {
    expect(service).toBeTruthy();
  }));

  it('should return associates in staging', inject([AssociateService], (service: AssociateService) => {
    service.getAssociatesInStaging().subscribe(associates => {
      expect(associates).toBeTruthy();
    });
  }));

  it('should return associates by id', inject([AssociateService], (service: AssociateService) => {
    const idsToTest = [1, 2, 5, 10];
    for (let i = 0; i < idsToTest.length; i++) {
      const id = idsToTest[i];
      service.getAssociate(id).subscribe(associate => {
        // check that an associate is returned and has the correct id
        expect(associate).toBeTruthy();
        expect(associate.id).toEqual(id);
      });
    }
  }));

  it('should update an associate', inject([AssociateService], (service: AssociateService) => {
    const id = 1;
    service.getAssociate(id).subscribe(associate => {
      const updatedAssociate: Associate = {
        selected: !associate.selected,
        id: id,
        firstName: 'testingFirstName',
        lastName: 'testingLastName',
        absent: !associate.absent,
        trainerName: 'testTrainerName',
        batchName: 'testBatchName',
        location: 'testLocation',
        skill: 'testSkill',
        marketingStartDate: new Date('1-1-20'),
        stagingStartDate: new Date('1-1-20'),
        confirmationDate: new Date('1-1-20'),
        projectStartDate: new Date('1-1-20'),
        stagingEndDate: new Date('1-1-20'),
        numberInterviews: 6,
        repanelCount: 6,
        clientName: 'testClientName'
      };
      service.updateAssociate(updatedAssociate).subscribe(newAssociate => {
        expect(newAssociate).toBeTruthy();
        expect(newAssociate.selected).not.toEqual(associate.selected);
        expect(newAssociate.id).toEqual(updatedAssociate.id);
        expect(newAssociate.firstName).toEqual(updatedAssociate.firstName);
        expect(newAssociate.lastName).toEqual(updatedAssociate.lastName);
        expect(newAssociate.absent).not.toEqual(associate.absent);
        expect(newAssociate.trainerName).toEqual(updatedAssociate.trainerName);
        expect(newAssociate.batchName).toEqual(updatedAssociate.batchName);
        expect(newAssociate.location).toEqual(updatedAssociate.location);
        expect(newAssociate.skill).toEqual(updatedAssociate.skill);
        expect(newAssociate.marketingStartDate).toEqual(updatedAssociate.marketingStartDate);
        expect(newAssociate.numberInterviews).toEqual(updatedAssociate.numberInterviews);
        expect(newAssociate.repanelCount).toEqual(updatedAssociate.repanelCount);
        expect(newAssociate.clientName).toEqual(updatedAssociate.clientName);
      });
    });
  }));
});
