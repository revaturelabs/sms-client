import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AssociateService } from '../../services/associate.service';
import { Associate } from '../../models/associate';

@Component({
  selector: 'app-mgr-manage-associates',
  templateUrl: './mgr-manage-associates.component.html',
  styleUrls: ['./mgr-manage-associates.component.css']
})
export class MgrManageAssociatesComponent implements OnInit {
  associates: Associate[];
  selectAll = true; // boolean for the checkbox that selects all associates
  atLeastOneSelected = false;

  stagingFilter = false; // filter by start of staging date?
  stagingFilterStart: Date = null;
  stagingFilterEnd: Date = null;

  confirmationFilter = false; // filter by confirmation?
  confirmationBool = false; // false = show unconfirmed; true = show confirmed

  constructor(private associateService: AssociateService) { }

  ngOnInit() {
    this.associateService.getAssociatesInStaging().subscribe(allAssociates => {
      this.associates = allAssociates;
    });
  }

  filterTable() {
    // $("#myInput").on("keyup", function() {
    //   var value = $(this).val().toLowerCase();
    //   $("#myTable tr").filter(function() {
    //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //   });
    // });
  }

  toggleStagingFilter() {
    // TODO: implement me
  }

  toggleSlide() {
    $('#toggleMe').slideToggle();
  }

  addAssociate(associate: Associate) {
    this.associateService.addNewAssociate(associate).subscribe((newAssociate: Associate) => {
      this.associates.push(associate);
    });
  }

  updateAssociate(associate: Associate) {
    this.associateService.updateAssociate(associate).subscribe((updatedAssociate: Associate) => {
      for (let i = 0; i < this.associates.length; i++) {
        // search for and update existing associate
        if (this.associates[i].id == updatedAssociate.id)
          this.associates[i] = updatedAssociate;
      }
    });
  }

  deleteAssociate(id: number) {
    this.associateService.deleteAssociate(id).subscribe(() => {
      this.associates.splice(id,1);
    });
  }

  selectAssociate(associate: Associate) {
    associate.selected = !associate.selected;
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
