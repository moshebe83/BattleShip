import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EGameState } from 'src/app/enums/battleship.enum';

import { IGameLevelData } from 'src/app/layout/play-game/play-game.interface';
import { IAxes, IShipsAmountsList, ISquareItem } from './game-board.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {
  private largestShipSize: number;
  private _gameState: EGameState;

  public rows: void[];
  public strikesCounter: number;
  public axesLabels: IAxes;
  public boardSquaresArr: ISquareItem[];
  public shipsAmountsList: IShipsAmountsList[];

  @Output() gameStateChanged: EventEmitter<EGameState> = new EventEmitter<EGameState>();

  @Input() data: IGameLevelData;

  @Input()
  get gameState(): EGameState { return this._gameState };
  set gameState(gameState: EGameState) {
    this._gameState = gameState;
    if (this.strikesCounter === this.data.amountOfShips && gameState === EGameState.PLAYING) {
      this.startNewGame();
    }
  }

  constructor() {
    this.rows = [];
    this.strikesCounter = 0;
    this.largestShipSize = 7;
    this.boardSquaresArr = [];
    this.shipsAmountsList = [];

    this._gameState = EGameState.PLAYING;
    this.data = {} as IGameLevelData;
    this.axesLabels = {} as IAxes;
  }

  ngOnInit(): void {
    this.setGameLevel();
    this.startNewGame();
  }

  private setGameLevel(): void {
    this.data.amountOfSquares = this.data.amountOfRows * this.data.squaresPerRow;
    this.rows = new Array(this.data.amountOfRows);
    this.createAxiesLabels();
  }

  private createAxiesLabels(): void {
    this.axesLabels.x = [];
    this.axesLabels.y = [];

    for (let i = 1; i <= this.data.squaresPerRow; i++) {
      this.axesLabels.x.push((i + 9).toString(36).toUpperCase());
    }

    for (let i = 1; i <= this.data.amountOfRows; i++) {
      this.axesLabels.y.push(i);
    }
  }

  private createBoardSquaresList(): void {
    this.boardSquaresArr = [];

    for (let i = 0; i < this.data.amountOfSquares; i++) {
      this.boardSquaresArr.push({ isShip: false, isClicked: false, shipId: -1, shipSize: -1 });
    }
  }

  private createShipsAmountsList(): void {
    this.shipsAmountsList = []

    for (let i = 0; i <= this.largestShipSize; i++) {
      this.shipsAmountsList.push({ onBoard: 0, sunk: 0 });
    }
  }

  private spreadShips(): void {
    for (let i = 0; i < this.data.amountOfShips; i++) {
      const getRandomSquareIndex = (): number => Math.floor(Math.random() * this.data.amountOfSquares);

      let isVertical: boolean = Boolean(Math.round(Math.random()));
      let randomShipSize: number = Math.floor(Math.random() * this.largestShipSize) + 1;
      let randomSquareI: number = getRandomSquareIndex();

      while (this.boardSquaresArr[randomSquareI].isShip) {
        randomSquareI = getRandomSquareIndex();
      }

      let currentShipSize: number = 0;

      for (let j = 0;
        j < (isVertical ? randomShipSize * this.data.squaresPerRow : randomShipSize) &&
        randomSquareI + j < this.data.amountOfSquares &&
        !this.boardSquaresArr[randomSquareI + j].isShip &&
        (j === 0 || (randomSquareI + j) % (isVertical ? this.data.amountOfRows : this.data.squaresPerRow) !== 0);
        isVertical ? j += this.data.squaresPerRow : j++
      ) {
        this.boardSquaresArr[randomSquareI + j] = {
          isShip: true,
          isClicked: false,
          shipId: i,
          isFirstSquareOfShip: j === 0,
          shipSize: 1,
          isVertical: isVertical
        }
        currentShipSize++;
      }
      
      this.shipsAmountsList[currentShipSize].onBoard++;

      if (currentShipSize > 1) {
        this.boardSquaresArr.map(square => square.shipId === i && (square.shipSize = currentShipSize));
      }

    }
  }

  private startNewGame(): void {
    this.strikesCounter = 0;
    this.createBoardSquaresList();
    this.createShipsAmountsList();
    this.spreadShips();
  }



  public trackByFn(index: number): number {
    return index;
  }

  public squareClicked(squareIndex: number, clickedShipId: number, shipSize: number): void {
    this.boardSquaresArr[squareIndex].isClicked = true;

    if (clickedShipId !== -1) {
      let currentShip = this.boardSquaresArr.filter(({ shipId }) => shipId === clickedShipId);
      if (currentShip.every(square => square.isClicked)) {
        currentShip.map(square => square.isShipSunk = true);
        this.shipsAmountsList[shipSize].sunk++;
        this.strikesCounter++;
      }
    }

    if (this.strikesCounter === this.data.amountOfShips) {
      this.gameStateChanged.emit(EGameState.WON);
    }
  }

}
