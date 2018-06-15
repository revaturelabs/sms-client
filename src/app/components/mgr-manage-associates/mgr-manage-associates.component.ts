import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AssociateService } from '../../services/associate.service';
import { TrainerService } from '../../services/trainer.service';
import { BatchService } from '../../services/batch.service';
import { ClientService } from '../../services/client.service';
import { Associate } from '../../models/associate';
import { Batch } from '../../models/batch';

@Component({
  selector: 'app-mgr-manage-associates',
  templateUrl: './mgr-manage-associates.component.html',
  styleUrls: ['./mgr-manage-associates.component.css']
})
export class MgrManageAssociatesComponent implements OnInit {
  associates: Associate[];
  selectedAssociates: Associate[] = []; // initialize to empty array
  trainers: any[] = [];
  batches: any[] = [];
  clients: any[] = [];
  locations: string[] = ["Reston","USF","UTA","WVU"];

  selectAll = true; // boolean for the checkbox that selects all associates
  atLeastOneSelected = false;

  stagingFilter = false; // filter by start of staging date?
  stagingFilterStart: Date = null;
  stagingFilterEnd: Date = null;

  confirmationFilter = false; // filter by confirmation?
  confirmationBool = false; // false = show unconfirmed; true = show confirmed

  constructor(
    private associateService: AssociateService,
    private batchService: BatchService,
    private trainerService: TrainerService,
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.associateService.getAssociatesInStaging().subscribe(allAssociates => {
      this.associates = allAssociates;
    });
    this.batchService.getCurrentBatches().subscribe(batches => {
      this.batches = batches;
    });
    this.clientService.getAllClients().subscribe(allClients => {
      this.clients = allClients;
    });
    this.trainerService.getAllTrainers().subscribe(allTrainers => {
      this.trainers = allTrainers;
    });
  }

  onAddAssociate(associate: Associate) {
    $("#add-modal").modal('hide');
    console.log(`Added ${associate.firstName} ${associate.lastName} as an associate`);
    this.associates.push(associate);
  }

  onAssociateUpdate() {
    $("#edit-modal").modal('hide');
    // loop through associates to update
    for (let i = 0; i < this.selectedAssociates.length; i++) {
      let associate = this.selectedAssociates[i];
      // retrieve updated associates individually
      this.associateService.getAssociate(associate.id).subscribe((updatedAssociate) => {
        this.associates[i] = updatedAssociate;
      });
      associate.selected = false; // set selected to false
      this.selectedAssociates.splice(i,1); // remove from selected array
    }
  }

  onAssociateRemoval() {
    $("#remove-modal").modal('hide');
    for (let i = 0; i < this.associates.length; i++) {
      this.associates[i].selected = false;
      this.associates.splice(i,1); // remove from selected array
    }
  }

  showFilters() {
    $('.filter-container').slideToggle();
  }

  toggleStagingFilter() {
    // TODO: implement me
  }

  toggleSlide() {
    $('#toggleMe').slideToggle();
  }

  selectAssociate(associate: Associate) {
    associate.selected = !associate.selected;
    if (associate.selected) { // if associate is being selected, add to array
      this.selectedAssociates.push(associate);
    } else { // if being de-selected, look up and remove associate from array
      for (let i = 0; i < this.selectedAssociates.length; i++) {
        if (this.selectedAssociates[i].id === associate.id) this.selectedAssociates.splice(i,1);
      }
    }
    this.resolveAtLeastOneSelected();
  }

  resolveAtLeastOneSelected() {
    let temp = false;
    for (let i=0; i<this.associates.length; i++) {
      if (this.associates[i].selected) temp = true;
    }
    this.atLeastOneSelected = temp;
  }

  toggleSelectAllAssociates() {
    console.log("SELECT ALL: "+this.selectAll);
    for (let i=0; i<this.associates.length; i++) {
      let a = this.associates[i];
      a.selected = this.selectAll;
    }
    this.atLeastOneSelected = this.selectAll;
    this.selectAll = !this.selectAll;
  }

}
