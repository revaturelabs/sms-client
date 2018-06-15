import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AssociateService } from '../../services/associate.service';
import { Associate } from '../../models/associate';

@Component({
  selector: 'app-remove-alert',
  templateUrl: './remove-alert.component.html',
  styleUrls: ['./remove-alert.component.css']
})
export class RemoveAlertComponent implements OnInit {

  @Input() associates: Associate[];

  @Output() associateRemoval: EventEmitter<any> = new EventEmitter();

  constructor(private associateService: AssociateService) { }

  ngOnInit() {
  }

  removeAssociates() {
    for (let i=0;i<this.associates.length;i++) {
      this.associateService.deleteAssociate(this.associates[i].id).subscribe((id) => {
        console.log(`removed associate ${id}`);
      });
    }
    this.associateRemoval.emit();
  }

}
