import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EGameState } from 'src/app/enums/battleship.enum';
import { IGameLevelData } from 'src/app/layout/play-game/play-game.interface';
import { ISquareItem } from './game-board.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {
  private amountOfSquares: number;
  private amountOfShips: number;
  private strikesCounter: number;
  
  public progressCounter: number;
  public boardSquaresArr: ISquareItem[];
  public amountOfRows: number;
  public squaresPerRow: number;
  public xAxisLabels: string[];
  public yAxisLabels: number[];
  public gameStateMsg: string;
  
  @Output() gameStateChanged: EventEmitter<EGameState> = new EventEmitter<EGameState>();
  
  @Input()
  get data(): IGameLevelData { return this._data };
  private _data: IGameLevelData;
  set data(currentGameData: IGameLevelData) {
    this._data = currentGameData;
    this.setGameLevel();
    this.startNewGame();
  };
  
  @Input()
  get gameState(): EGameState { return this._gameState };
  private _gameState: EGameState;
  set gameState(gameState: EGameState) {
    this._gameState = gameState;
    if (this.strikesCounter === this.amountOfShips && gameState === EGameState.PLAYING) {
      this.startNewGame();
    }
  }

  constructor() {
    this.amountOfShips = 0;
    this.strikesCounter = 0;
    this.progressCounter = 0;
    this.amountOfRows = 0;
    this.squaresPerRow = 0;
    this.amountOfSquares = 0;
    
    this._gameState = EGameState.PLAYING;
    this._data = {} as IGameLevelData;

    this.boardSquaresArr = [];
    this.xAxisLabels = [];
    this.yAxisLabels = [];

    this.gameStateMsg = '';
   }

  ngOnInit(): void {
    this.setGameLevel();
    this.startNewGame();
  }

  private setGameLevel() {
    this.amountOfShips = this.data.amountOfShips;
    this.amountOfRows = this.data.amountOfRows;
    this.squaresPerRow = this.data.squaresPerRow;
    this.amountOfSquares = this.amountOfRows * this.squaresPerRow;
    this.createAxiesLabels();
  }

  private createAxiesLabels() {
    this.xAxisLabels = [];
    this.yAxisLabels = [];

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

  public squareClicked(squareIndex: number, shipId: number): void {
    this.progressCounter++;

    if (shipId === -1) {
      this.boardSquaresArr[squareIndex].isClicked = true;
    } else {
      this.boardSquaresArr.map(square => square.shipId === shipId && (square.isClicked = true));
      this.strikesCounter++;
    }

    if (this.strikesCounter === this.amountOfShips) {
      this.gameStateChanged.emit(EGameState.WON);
      this.gameStateMsg = 'You Go Girl!';
    }
  }
}
