import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EGameState } from 'src/app/enums/battleship.enum';
import { ISquareItem } from './game-board.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {

  private amountOfSquares: number = 0;
  private amountOfShips: number = 10;
  private strikesCounter: number = 0;
  private _gameState: EGameState = EGameState.PLAYING;

  public progressCounter: number = 0;
  public boardSquaresArr: ISquareItem[] = [];
  public amountOfRows: number = 10;
  public squaresPerRow: number = 10;
  public xAxisLabels: string[] = [];
  public yAxisLabels: number[] = [];
  public gameStateMsg: string = '';

  @Output() gameStateChanged: EventEmitter<EGameState> = new EventEmitter<EGameState>();

  @Input()
  get gameState(): EGameState { return this._gameState };
  set gameState(gameState: EGameState) {
    this._gameState = gameState;
    if (this.strikesCounter === this.amountOfShips && gameState === EGameState.PLAYING) {
      this.startNewGame();
    }
  }

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

  private createBoardSquares(): void {
    this.boardSquaresArr = [];
    for (let i = 0; i < this.amountOfSquares; i++) {
      this.boardSquaresArr.push({ isShip: false, isClicked: false, shipId: -1, shipSize: -1 });
    }
  }

  private spreadShips(): void {
    for (let i = 0; i < this.amountOfShips; i++) {
      let randomShipSize: number = Math.floor(Math.random() * (this.squaresPerRow - 3)) + 1;
      let randomSquareI: number = Math.floor(Math.random() * this.amountOfSquares);

      while (this.boardSquaresArr[randomSquareI].isShip) {
        randomSquareI = Math.floor(Math.random() * this.amountOfSquares);
      }

      let currentShipSize: number = 0;

      for (let j = 0;
        j < randomShipSize && randomSquareI + j < this.amountOfSquares &&
        !this.boardSquaresArr[randomSquareI + j].isShip && (j === 0 || (randomSquareI + j) % this.squaresPerRow !== 0);
        j++
      ) {
        this.boardSquaresArr[randomSquareI + j] = {
          isShip: true,
          isClicked: false,
          shipId: i,
          isFirstSquareOfShip: j === 0,
          shipSize: 1
        }
        currentShipSize++;
      }

      if (currentShipSize > 1) {
        this.boardSquaresArr.map(square => square.shipId === i && (square.shipSize = currentShipSize));
      }
    }
  }

  private startNewGame(): void {
    this.gameStateMsg = '';
    this.strikesCounter = 0;
    this.progressCounter = 0;
    this.createBoardSquares();
    this.spreadShips();
  }


  public trackByFn(index: number): number {
    return index;
  }

  public counter(length: number): number[] {
    return new Array(length);
  }

  public squareClicked(squareIndex: number, isShip: boolean, clickedShipId: number): void {
    this.progressCounter++;
    this.boardSquaresArr[squareIndex].isClicked = true;

    if (isShip) {
      let currentShip = this.boardSquaresArr.filter(({ shipId }) => shipId === clickedShipId);
      if (currentShip.every(square => square.isClicked)) {
        currentShip.map(square => square.isShipDestroyed = true);
        this.strikesCounter++;
      }
    }

    if (this.strikesCounter === this.amountOfShips) {
      this.gameStateChanged.emit(EGameState.WON);
      this.gameStateMsg = 'You Go Girl!';
    }
  }
}
