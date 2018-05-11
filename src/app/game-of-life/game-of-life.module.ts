import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameOfLifeComponent } from './game-of-life.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GameOfLifeComponent],
  exports: [GameOfLifeComponent]
})
export class GameOfLifeModule { }
