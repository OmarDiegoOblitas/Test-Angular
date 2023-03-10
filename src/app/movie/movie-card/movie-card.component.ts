import {Component, Input} from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() title:string = "Default Title";
  @Input() director:string = "Default Director";
}
