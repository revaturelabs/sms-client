import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Associate } from '../models/associate';

var associates: Associate[] = [
  {
    selected: false,
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
    selected: false,
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

for (let i=3;i<20;i++) {
  let associate = {
    selected: false,
    id: i,
    firstName: `Person ${i}`,
    lastName: `Person ${i}`,
    absent: true,
    trainerName: `Trainer ${i}`,
    batchName: `Batch ${i}`,
    location: "Reston",
    skill: "Java",
    marketingStartDate: new Date(),
    stagingStartDate: new Date(),
    confirmationDate: new Date(),
    projectStartDate: new Date(),
    stagingEndDate: new Date(),
    numberInterviews: i,
    repanelCount: i+1,
    clientName: `Client ${i}`
  }
  associates.push(associate);
}

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
