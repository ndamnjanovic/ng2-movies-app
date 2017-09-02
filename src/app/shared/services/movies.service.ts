import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { movies } from './../data/examples';
import { Movie } from '../models/movie';

@Injectable()
export class MoviesService {

  private movies;

  constructor() { }

  getMovies() {
    this.movies = movies.map((movie) => {
      return new Movie(
        movie.id,
        movie.name,
        movie.director,
        movie.imageUrl,
        movie.duration,
        new Date(movie.relaseDate),
        movie.genres
      );
    });

    return Observable.of(this.movies);
  }

}
