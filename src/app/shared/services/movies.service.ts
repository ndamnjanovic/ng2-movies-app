import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { movies } from './../data/examples';
import { Movie } from '../models/movie';

@Injectable()
export class MoviesService {

  private movies: Movie[];

  constructor() {
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
  }

  getMovies(): Observable<Movie[]> {
    return Observable.of(this.movies);
  }

  searchMoviesByTerm(term): Observable<Movie[]> {
    const foundMovies = this.movies.filter((movie: Movie) => {
      return movie.name.toLowerCase().includes(term.toLowerCase());
    });

    if (foundMovies.length === 0) {
      return Observable.throw(term);
    }

    return Observable.of(foundMovies);
  }

}
