import { Component,Input } from '@angular/core';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
 @Input() name:string="name";
 @Input() mass:string= "default mass";
 @Input() height:string="height default";
 @Input() hair_color:string="hair_color-default";
 @Input() skin_color:string="skin_color default";
 @Input() eye_color:string="eye_color default";
 @Input() gender:string="gender default";
}
