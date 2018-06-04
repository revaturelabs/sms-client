import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AssociateService } from '../../services/associate.service';
import { Associate } from '../../models/associate';

@Component({
  selector: 'app-mgr-associate-view',
  templateUrl: './mgr-associate-view.component.html',
  styleUrls: ['./mgr-associate-view.component.css'],
})
export class MgrAssociateViewComponent implements OnInit {

  public associate: Associate;
  public editingMode = false;

  // new associate properties
  public newAttendance: boolean;
  public newMarketingStartDate: Date = new Date('2018-01-26');
  public newStagingStartDate: Date = new Date('2018-01-26');
  public newStagingEndDate: Date = new Date('2018-01-26');
  public newConfirmationDate: Date = new Date('2018-01-26');
  public newProjectStartDate: Date = new Date('2018-01-26');
  public newClientName: string;
  public newNumberInterviews: number;
  public newRepanelCount: number;

  constructor(
    private route: ActivatedRoute,
    private associateService: AssociateService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.associateService.getAssociate(id).subscribe(data => this.associate = data);
  }

  toggleEditMode() {
    this.editingMode = !this.editingMode;
  }

  saveChanges() {
    console.log('saving changes...');
    this.saveNewVariables();
    console.log(`New date: ${this.newMarketingStartDate}`);
    console.log(`New date: ${this.associate.marketingStartDate}`);
    this.editingMode = false;
    this.associateService.updateAssociate(this.associate);
  }

  cancelChanges() {
    this.resetNewVariables();
    this.editingMode = false;
  }

  saveNewVariables() {
    this.associate.absent = this.newAttendance;
    this.associate.marketingStartDate = this.newMarketingStartDate;
    this.associate.stagingStartDate = this.newStagingStartDate;
    this.associate.stagingEndDate = this.newStagingEndDate;
    this.associate.confirmationDate = this.newConfirmationDate;
    this.associate.projectStartDate = this.newProjectStartDate;
    this.associate.clientName = this.newClientName;
    this.associate.numberInterviews = this.newNumberInterviews;
    this.associate.repanelCount = this.newRepanelCount;
  }

  resetNewVariables() {
    this.newAttendance = this.associate.absent;
    this.newMarketingStartDate = this.associate.marketingStartDate;
    this.newStagingStartDate = this.associate.stagingStartDate;
    this.newStagingEndDate = this.associate.stagingEndDate;
    this.newConfirmationDate = this.associate.confirmationDate;
    this.newProjectStartDate = this.associate.projectStartDate;
    this.newClientName = this.associate.clientName;
    this.newNumberInterviews = this.associate.numberInterviews;
    this.newRepanelCount = this.associate.repanelCount;
  }

}
