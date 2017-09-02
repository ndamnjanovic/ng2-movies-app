import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesService } from '../../../shared/services/movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.moviesService.searchMoviesByTerm(params['term'])
        .subscribe(foundMovies => {

        }, (term) => {
          alert('There are no movies with searched term: ' + term);

          this.router.navigate(['movies']);
        });
    });
  }

}
