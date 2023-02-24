import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService
{
  //review the API
  //testing this way
  movie:any[] = [{
    nombre:'first',
    categories:'accion'
  },
    {
      nombre:'second',
      categories:'drama'
    }
  ]
  constructor() {
    console.log('Function service')
  }
  MovieService(){
    return this.movie;
  }
}
