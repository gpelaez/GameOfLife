import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameOfLifeModule } from './game-of-life/game-of-life.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameOfLifeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
