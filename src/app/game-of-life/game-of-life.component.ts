import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css']
})
export class GameOfLifeComponent implements OnInit {

  @Input() width: any;
  @Input() height: any;

  matrix: Number[][] = [];
  isPlaying: Boolean = false;

  subTimeout: any;

  period: Number = 500;

  constructor() {
    this.subTimeout = null;
  }


  ngOnInit() {
    this.matrix = [];
    for (let i = 0; i < this.width; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.height; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }
  loadPattern() {
    this.matrix[0][0] = 1;
    this.matrix[0][1] = 1;
    this.matrix[1][0] = 1;
    this.matrix[1][3] = 1;
    this.matrix[2][1] = 1;
    this.matrix[2][2] = 1;
  }
  play() {
    this.isPlaying = true;
    if (this.isPlaying) {
      this.subTimeout = setTimeout(() => {
        this.nextGeneration();
      }, this.period);
    }
  }
  pause() {
    if (this.subTimeout !== null) {
      clearTimeout(this.subTimeout);
      this.subTimeout = null;
    }
    this.isPlaying = false;
  }
  togglePlay() {
    if (this.isPlaying === true) {
      this.pause();
      return;
    }
    this.play();
  }

  toggleDeath(row: number, col: number) {
    this.matrix[row][col] = this.matrix[row][col] === 0 ? 1 : 0;
  }
  nextGeneration() {
    // tslint:disable-next-line:prefer-const
    let newMatrix = [];
    this.matrix.forEach((row, i) => {
      newMatrix[i] = [];
      row.forEach((cell, j) => {
        const aliveNeighbours = this.countNeighborsAlive(i, j);
        if (cell === 1 && aliveNeighbours < 2) {
          newMatrix[i][j] = 0;
        } else if (cell === 1 && (aliveNeighbours === 2 || aliveNeighbours === 3)) {
          newMatrix[i][j] = 1;
        } else if (cell === 1 && aliveNeighbours > 3) {
          newMatrix[i][j] = 0;
        } else if (cell === 0 && aliveNeighbours === 3) {
          newMatrix[i][j] = 1;
        } else {
          newMatrix[i][j] = 0;
        }
      });
    });
    this.matrix = newMatrix;
    if (this.isPlaying) {
      setTimeout(() => {
        this.nextGeneration();
      }, this.period);
    }
  }

  countNeighborsAlive(row: number, col: number): number {
    let aliveNeighboursCount = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i === row && j === col) { continue; }
        const x = (i >= this.height) ? 0 : (i < 0) ? this.height - 1 : i;
        const y = (j >= this.width) ? 0 : (j < 0) ? this.width - 1 : j;
        if (this.matrix[x][y] === 1) {
          aliveNeighboursCount++;
        }
      }
    }
    return aliveNeighboursCount;
  }

  

}
