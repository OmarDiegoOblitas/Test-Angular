import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import  {Observable} from "rxjs";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  character:any[] =[];

  people:any;
  constructor(private  http:HttpClient) {

  }
    getData(): Observable<any> {
      return this.http.get<any>('https://swapi.dev/api/people');
    }
    ngOnInit(){
      this.getData().subscribe((data) => {
        this.people = data.results;
      });
  }
}
