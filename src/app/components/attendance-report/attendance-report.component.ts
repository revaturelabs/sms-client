import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../../services/associate.service';
import { Associate } from '../../models/associate';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent implements OnInit {
  public reportDuration: string = "This week";
  public associates: Associate[];

  constructor(private associateService: AssociateService) { }

  ngOnInit() {
    this.associateService.getAssociatesInStaging().subscribe(data => {
      this.associates = data;
    });
    this.refreshReport();
  }

  refreshReport() {
    console.log("refreshing report...");
  }

  changeReportDuration(length: string){
    this.reportDuration = length;
  }

}
