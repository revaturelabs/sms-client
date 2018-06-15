import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Batch } from '../../models/batch';
import { BatchService } from '../../services/batch.service';
import { AssociateService } from '../../services/associate.service';
import { TrainerService } from '../../services/trainer.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Associate } from '../../models/associate';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  associate: Associate;
  selectedBatch: Batch;
  selectedClient: any;

  @Input() batches: Batch[];
  @Input() trainers: any;
  @Input() clients: any;
  @Input() locations: any;
  @Output() addNewAssociate: EventEmitter<Associate> = new EventEmitter();

  constructor(
    private batchService: BatchService,
    private associateService: AssociateService,
    private trainerService: TrainerService
  ) { }

  ngOnInit() {
    this.associate = new Associate();
  }

  addAssociate() {
    let associate = this.associate;
    associate.batchName = this.selectedBatch.name;
    associate.trainerName = this.trainers[this.selectedBatch.trainerId+1];
    this.associateService.addNewAssociate(this.associate).subscribe((newAssociate: Associate) => {
      this.addNewAssociate.emit(newAssociate);
    });
  }

}
