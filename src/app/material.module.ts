import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [ MatButtonModule, MatSlideToggleModule ],
  exports: [ MatButtonModule, MatSlideToggleModule ],
})
export class MaterialModule { }