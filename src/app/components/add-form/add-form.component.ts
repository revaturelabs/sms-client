import { Component, OnInit } from '@angular/core';
import { Batch } from '../../models/batch';
import { BatchService } from '../../services/batch.service';
import { AssociateService } from '../../services/associate.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  selectedBatch: Batch;

  batches: Observable<Batch[]>;

  constructor(private batchService: BatchService) { }

  ngOnInit() {
    this.batchService.getCurrentBatches().subscribe((batches) => {
      console.log(batches);
      this.batches = of(batches);
    });
  }

  // addAssociate(associate: Associate) {
  //   this.associateService.addNewAssociate(associate).subscribe((newAssociate: Associate) => {
  //     this.associates.push(associate);
  //   });
  // }

}
