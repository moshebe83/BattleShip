import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  public boardSquaresArr: ISquareItem[] = [];
  public amountOfRows: number = 10;
  public squaresPerRow: number = 10;
  public progressCounter: number = 0;
  public xAxisLabels: string[] = [];
  public yAxisLabels: number[] = [];

  @Output() gameStateChanged: EventEmitter<EGameState> = new EventEmitter<EGameState>();

  @Input()
  get gameState(): EGameState { return this._gameState };
  set gameState(gameState: EGameState) {
    this._gameState = gameState;
    if (this.strikesCounter === this.amountOfShips && gameState === EGameState.PLAYING) {
      this.startNewGame();
    }
  }

  private _gameState: EGameState;

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

  private spreadShips(): void {
    for (let i = 0; i < this.amountOfShips; i++) {
      let randomSquare: number = Math.floor(Math.random() * this.amountOfSquares);

      while (this.boardSquaresArr[randomSquare].isShip) {
        randomSquare = Math.floor(Math.random() * this.amountOfSquares);
      }

      // // BUG BELOW vvvvv
      this.boardSquaresArr[randomSquare] = { isShip: true, isClicked: false };
      // this.boardSquaresArr[randomSquare].isShip = true;
    }
  }

  public trackByFn(index, item): number {
    return index;
  }

  public counter(length: number): number[] {
    return new Array(length);
  }

  public squareClicked(squareIndex: number): void {
    this.progressCounter++;

    // // BUG BELOW vvvvv
    // this.boardSquaresArr.find((item, index) => index === squareIndex && (item.isClicked = true));
    // this.boardSquaresArr[squareIndex].isClicked = true;

    if (this.boardSquaresArr[squareIndex].isShip) {
      this.boardSquaresArr[squareIndex] = { isShip: true, isClicked: true };
      this.strikesCounter++;
    }
    else {
      this.boardSquaresArr[squareIndex] = { isShip: false, isClicked: true };
    }

    if (this.strikesCounter === this.amountOfShips) {
      this.gameStateChanged.emit(EGameState.WON);
    }
  }

  private startNewGame(): void {
    this.strikesCounter = 0;
    this.progressCounter = 0;
    this.boardSquaresArr = new Array(this.amountOfSquares).fill(this.initSquareItem);
    // console.log(this.boardSquaresArr);
    this.spreadShips();
  }
}
