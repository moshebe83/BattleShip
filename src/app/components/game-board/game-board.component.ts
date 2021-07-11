import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EGameState } from 'src/app/enums/enums.enum';
import { ISquareItem } from './game-board.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {

  private amountOfSquares: number;
  private amountOfShips: number = 10;
  private strikesCounter: number;

  public progressCounter: number;
  public boardSquaresArr: ISquareItem[];
  public amountOfRows: number = 10;
  public squaresPerRow: number = 10;
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
    this.createAxiesLabels();
    this.startNewGame();
  }

  private createAxiesLabels() {
    for (let i = 1; i <= this.squaresPerRow; i++) {
      this.xAxisLabels.push((i + 9).toString(36).toUpperCase());
    }

    for (let i = 1; i <= this.amountOfRows; i++) {
      this.yAxisLabels.push(i);
    }
  }

  private createBoardSquares() {
    this.boardSquaresArr = [];
    for (let i = 0; i < this.amountOfSquares; i++) {
      this.boardSquaresArr.push({ id: i, isShip: false, isClicked: false })
    }
  }

  private spreadShips(): void {
    for (let i = 0; i < this.amountOfShips; i++) {
      let randomSquare: number = Math.floor(Math.random() * this.amountOfSquares);

      while (this.boardSquaresArr[randomSquare].isShip) {
        randomSquare = Math.floor(Math.random() * this.amountOfSquares);
      }

      this.boardSquaresArr[randomSquare].isShip = true;
    }
  }

  public trackByFn(index): number {
    return index;
  }

  public counter(length: number): number[] {
    return new Array(length);
  }

  public squareClicked(squareIndex: number): void {
    this.progressCounter++;
    this.boardSquaresArr[squareIndex].isClicked = true;

    if (this.boardSquaresArr[squareIndex].isShip) {
      this.strikesCounter++;
    }

    if (this.strikesCounter === this.amountOfShips) {
      this.gameStateChanged.emit(EGameState.WON);
    }
  }

  private startNewGame(): void {
    this.strikesCounter = 0;
    this.progressCounter = 0;
    this.createBoardSquares();
    this.spreadShips();
  }
}
