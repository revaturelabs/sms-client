import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { AssociateService } from '../../services/associate.service';
import { Associate } from '../../models/associate';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-mgr-overview',
  templateUrl: './mgr-overview.component.html',
  styleUrls: ['./mgr-overview.component.css']
})
export class MgrOverviewComponent implements OnInit {
  public associates: Associate[];

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

  toggleSlide() {
    $('#toggleMe').slideToggle();
  }

  doSomething() {
    this.associates[0].selected = !this.associates[0].selected;
  }

}
