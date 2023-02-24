import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CharacterComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule
  ],
  exports: [
    CharacterCardComponent
  ]
})
export class CharacterModule { }
