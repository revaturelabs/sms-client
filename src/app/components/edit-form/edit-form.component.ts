import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Associate } from '../../models/associate';
import { AssociateService } from '../../services/associate.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  newAssociateData: Associate;

  @Input() associates: Associate[];

  @Output() associateUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private associateService: AssociateService) { }

  ngOnInit() {
    this.newAssociateData = new Associate();
    this.newAssociateData.id = null;
  }

  updateAssociates() {
    // loop through associates and update each individually
    for (let i=0;i<this.associates.length;i++) {
      let oldAssociate = this.associates[i];
      let newAssociate = oldAssociate;
      newAssociate.absent = this.newAssociateData.absent;
      newAssociate.stagingStartDate = this.newAssociateData.stagingStartDate;
      newAssociate.stagingEndDate = this.newAssociateData.stagingEndDate;
      newAssociate.marketingStartDate = this.newAssociateData.marketingStartDate;
      newAssociate.confirmationDate = this.newAssociateData.confirmationDate;
      newAssociate.projectStartDate = this.newAssociateData.projectStartDate;
      newAssociate.numberInterviews = this.newAssociateData.numberInterviews;
      newAssociate.repanelCount = this.newAssociateData.repanelCount;
      this.associateService.updateAssociate(newAssociate).subscribe((updatedAssociate: Associate) => {
        console.log(`updated associate ${this.associates[i].id}`);
      });
    }
    this.associateUpdate.emit();
  }

}
