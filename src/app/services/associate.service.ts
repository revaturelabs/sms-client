import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Associate } from '../models/associate';

const associates: Associate[] = [
  {
    id: 1,
    firstName: "test1",
    lastName: "test1",
    absent: true,
    trainerName: "test1",
    batchName: "test1",
    location: "test1",
    skill: "test1",
    marketingStartDate: new Date(),
    stagingStartDate: new Date(),
    confirmationDate: new Date(),
    projectStartDate: new Date(),
    stagingEndDate: new Date(),
    numberInterviews: 1,
    repanelCount: 2,
    clientName: "test1"
  },
  {
    id: 2,
    firstName: "test2",
    lastName: "test2",
    absent: false,
    trainerName: "test2",
    batchName: "test2",
    location: "test2",
    skill: "test2",
    marketingStartDate: new Date(),
    stagingStartDate: new Date(),
    confirmationDate: new Date(),
    projectStartDate: new Date(),
    stagingEndDate: new Date(),
    numberInterviews: 1,
    repanelCount: 2,
    clientName: "test2"
  }
];

@Injectable()
export class AssociateService {

  constructor() { }

  public getAssociatesInStaging(): Observable<Associate[]> {
    return of(associates);
  }

  public getAssociate(id: number): Observable<Associate> {
    return of(associates[id-1]);
  }

}
