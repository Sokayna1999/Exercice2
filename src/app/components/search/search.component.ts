import { Component } from '@angular/core';
import { MovieDBService } from '../../services/movieDB.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  movieToSearch: string='';
  movies: any;

  constructor(private movieDBService: MovieDBService) {}

  search() {
    this.movieDBService.searchMovies(this.movieToSearch).subscribe((data) => {
      this.movies = data;
    });
  }
}
