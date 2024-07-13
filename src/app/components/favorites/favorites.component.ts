import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../../services/movieDB.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: any[] = [];

  constructor(private movieDBService: MovieDBService) {}

  ngOnInit(): void {
    const favoritesFromLS = JSON.parse(localStorage.getItem('favorites') ?? '[]');;
    favoritesFromLS.forEach((id: number) => {
      this.movieDBService.getMovieDetails(id).subscribe((movie) => {
        this.favoriteMovies.push(movie);
      });
    });
  }
}
