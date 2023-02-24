import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MovieService} from './../movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {

  movie:any[] =[];
  films: any;
  constructor(private http: HttpClient, _servicio:MovieService){
    this.movie = _servicio.MovieService();
  }
  getData(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/films');
  }
  ngOnInit() {
    this.getData().subscribe((data) => {
      this.films = data.results;
    });
  }
}

