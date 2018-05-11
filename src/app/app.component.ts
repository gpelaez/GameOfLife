import { Component, ViewChild } from '@angular/core';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('game') game: GameOfLifeComponent;

  title = 'The game of life.';

  togglePlay() {
    console.log(this.game);
  }
}
