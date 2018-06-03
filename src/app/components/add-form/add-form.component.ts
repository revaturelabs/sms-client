import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  selectedBatch: any;

  batches = [
    {
      "name": "1712Dec11JTA",
      "trainer": "Yuvi"
    },
    {
      "name": "1803Mar05Java",
      "trainer": "Ryan"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
