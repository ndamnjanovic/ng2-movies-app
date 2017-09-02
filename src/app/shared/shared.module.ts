import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesService } from './services/movies.service';
import { MovieRowComponent } from './components/movie-row/movie-row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MovieRowComponent
  ],
  declarations: [
    MovieRowComponent
  ],
  providers: [
    MoviesService
  ]
})
export class SharedModule { }
