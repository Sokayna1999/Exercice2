import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './details.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    debugger;
    this.route.data.subscribe((data) => {
      this.movie = data;
    });
  }

  likeMovie() {
    let likes = JSON.parse(localStorage.getItem('likes') ?? '[]') || [];
    if (!likes.includes(this.movie.id)) {
      likes.push(this.movie.id);
      localStorage.setItem('likes', JSON.stringify(likes));
    }
  }
  
  addToFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') || [];
    if (!favorites.includes(this.movie.id)) {
      favorites.push(this.movie.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
  
}
