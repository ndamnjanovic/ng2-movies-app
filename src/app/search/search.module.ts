import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    SearchComponent
  ],
  declarations: [
    SearchComponent
  ]
})
export class SearchModule { }
