import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    SearchInputComponent
  ],
  declarations: [
    SearchInputComponent,
    SearchPageComponent
  ]
})
export class SearchModule { }
