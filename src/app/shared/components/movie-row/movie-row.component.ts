import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

  private movie: Movie;

  @Input()
  set movieRow(movie) {
    this.movie = movie;
  };

  constructor() { }

  ngOnInit() {
  }

}
