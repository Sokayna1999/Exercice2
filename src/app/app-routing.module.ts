import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailComponent } from './components/details/details.component';
import { MovieResolver } from './services/movieResolver.service';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailComponent, resolve: { movie: MovieResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
