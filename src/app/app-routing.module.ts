import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieGuard} from "./guards/movie.guard";
import {CharacterGuard} from "./guards/character.guard";


const routes: Routes = [
  { path: 'character',canDeactivate:[CharacterGuard],  loadChildren: () => import('./character/character.module').then(m => m.CharacterModule) },
  { path: 'movie',canActivate:[MovieGuard], loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





