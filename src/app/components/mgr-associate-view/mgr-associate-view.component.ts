import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AssociateService } from '../../services/associate.service';
import { Associate } from '../../models/associate';

@Component({
  selector: 'app-mgr-associate-view',
  templateUrl: './mgr-associate-view.component.html',
  styleUrls: ['./mgr-associate-view.component.css'],
})
export class MgrAssociateViewComponent implements OnInit {

  public associate: Associate;

  constructor(
    private route: ActivatedRoute,
    private associateService: AssociateService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.associateService.getAssociate(id).subscribe(data => this.associate = data);
  }

}
