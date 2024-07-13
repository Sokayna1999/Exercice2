import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieDBService } from './movieDB.service';

@Injectable({
  providedIn: 'root',
})
export class MovieResolver implements Resolve<any> {
  constructor(private movieDBService: MovieDBService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    debugger;
    const id = route.paramMap.get('id');
    return this.movieDBService.getMovieDetails(Number(id));
  }
}
