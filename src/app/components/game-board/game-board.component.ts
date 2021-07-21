import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EGameState } from 'src/app/enums/battleship.enum';
import { IGameLevelData, IStateMsgs } from 'src/app/layout/play-game/play-game.interface';
import { IAxes, ISquareItem, IState } from './game-board.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {
  private largestShipImgSize: number;
  private _gameState: EGameState;

  public state: IState;
  public boardSquaresArr: ISquareItem[];
  public axesLabels: IAxes;

  @Output() gameStateChanged: EventEmitter<EGameState> = new EventEmitter<EGameState>();

  @Input() data: IGameLevelData;
  @Input() stateMsgs: IStateMsgs;

  @Input()
  get gameState(): EGameState { return this._gameState };
  set gameState(gameState: EGameState) {
    this._gameState = gameState;
    if (this.state.strikesCounter === this.data.amountOfShips && gameState === EGameState.PLAYING) {
      this.startNewGame();
    }
  }

  constructor() {
    this.largestShipImgSize = 7;
    this.boardSquaresArr = [];

    this._gameState = EGameState.PLAYING;
    this.data = {} as IGameLevelData;
    this.axesLabels = {} as IAxes;
    this.state = {} as IState;
    this.stateMsgs = {} as IStateMsgs;
  }

  ngOnInit(): void {
    this.setGameLevel();
    this.startNewGame();
  }

  private setGameLevel() {
    this.data.amountOfSquares = this.data.amountOfRows * this.data.squaresPerRow;
    this.createAxiesLabels();
  }

  private createAxiesLabels() {
    this.axesLabels.x = [];
    this.axesLabels.y = [];

    for (let i = 1; i <= this.data.squaresPerRow; i++) {
      this.axesLabels.x.push((i + 9).toString(36).toUpperCase());
    }

    for (let i = 1; i <= this.data.amountOfRows; i++) {
      this.axesLabels.y.push(i);
    }
  }

  private createBoardSquares(): void {
    this.boardSquaresArr = [];
    for (let i = 0; i < this.data.amountOfSquares; i++) {
      this.boardSquaresArr.push({ isShip: false, isClicked: false, shipId: -1, shipSize: -1 });
    }
  }

  private spreadShips(): void {
    for (let i = 0; i < this.data.amountOfShips; i++) {
      let randomShipSize: number = Math.floor(Math.random() * this.largestShipImgSize) + 1;
      let randomSquareI: number = Math.floor(Math.random() * this.data.amountOfSquares);

      while (this.boardSquaresArr[randomSquareI].isShip) {
        randomSquareI = Math.floor(Math.random() * this.data.amountOfSquares);
      }

      let currentShipSize: number = 0;

      for (let j = 0;
        j < randomShipSize && randomSquareI + j < this.data.amountOfSquares &&
        !this.boardSquaresArr[randomSquareI + j].isShip && (j === 0 || (randomSquareI + j) % this.data.squaresPerRow !== 0);
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
    this.state = { progressCounter: 0, strikesCounter: 0 };
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
    this.state.progressCounter++;
    this.boardSquaresArr[squareIndex].isClicked = true;

    if (isShip) {
      let currentShip = this.boardSquaresArr.filter(({ shipId }) => shipId === clickedShipId);
      if (currentShip.every(square => square.isClicked)) {
        currentShip.map(square => square.isShipSunk = true);
        this.state.strikesCounter++;
      }
    }

    if (this.state.strikesCounter === this.data.amountOfShips) {
      this.gameStateChanged.emit(EGameState.WON);
      this.state.msg = this.stateMsgs.win;
    }
  }

}
