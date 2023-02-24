import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    MovieComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class MovieModule { }
