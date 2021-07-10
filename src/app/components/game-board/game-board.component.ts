import { Component, OnInit } from '@angular/core';

import { EGameState } from 'src/app/enums/enums.enum';
import { ISquareItem } from './game-board.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {

  private initSquareItem: ISquareItem = { isShip: false, isClicked: false };
  private amountOfSquares: number;
  private amountOfShips: number = 10;
  private strikesCounter: number = 0;

  public gameState: EGameState = EGameState.PLAYING;
  public boardSquaresArr: ISquareItem[] = [];
  public amountOfRows: number = 10;
  public squaresPerRow: number = 10;
  public progressCounter: number = 0;
  public xAxisLabels: string[] = [];
  public yAxisLabels: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.amountOfSquares = this.amountOfRows * this.squaresPerRow;
    this.boardSquaresArr = new Array(this.amountOfSquares).fill(this.initSquareItem);

    this.createAxiesLabels();
    this.spreadShips();
  }

  private createAxiesLabels() {
    for (let i = 0; i < this.squaresPerRow; i++) {
      this.xAxisLabels.push((i + 10).toString(36).toUpperCase());
    }

    for (let i = 0; i < this.amountOfRows; i++) {
      this.yAxisLabels.push(i + 1);
    }
  }

  private spreadShips() {
    for (let i = 0; i < this.amountOfShips; i++) {
      let randomSquare: number = Math.floor(Math.random() * this.amountOfSquares);

      while (this.boardSquaresArr[randomSquare].isShip) {
        randomSquare = Math.floor(Math.random() * this.amountOfSquares);
      }

      this.boardSquaresArr[randomSquare] = { isShip: true, isClicked: false };
    }
  }

  public trackByFn(index, item) {
    return index;
  }

  public counter(length: number) {
    return new Array(length);
  }

  public squareClicked(squareIndex: number) {
    this.progressCounter++;

    if (this.boardSquaresArr[squareIndex].isShip) {
      this.boardSquaresArr[squareIndex] = { isShip: true, isClicked: true };
      this.strikesCounter++;
    }
    else {
      this.boardSquaresArr[squareIndex] = { isShip: false, isClicked: true };
    }

    if (this.strikesCounter === this.amountOfShips) {
      this.gameState = EGameState.WON;
      setTimeout(() => {
        alert("הודעת ניצחון");
      }, 300);
    }
  }

}
