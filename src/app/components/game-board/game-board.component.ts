import { Component, OnInit } from '@angular/core';
import { EGameState } from 'src/app/enums/enums.enum';
import { ISquareItem } from './game-board.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {

  private initSquareItem: ISquareItem;
  private amountOfSquares: number;
  private amountOfShips: number;

  public gameState: EGameState;
  public boardSquaresArr: ISquareItem[];
  public amountOfRows: number;
  public squaresPerRow: number;
  public progressCounter: number;
  public strikesCounter: number;
  public xAxisLabels: string[];
  public yAxisLabels: number[];

  constructor() {
    this.initSquareItem = { isShip: false, isClicked: false };
    this.amountOfShips = 10;

    this.gameState = EGameState.PLAYING;
    this.boardSquaresArr = [];
    this.amountOfRows = 10;
    this.squaresPerRow = 10;
    this.progressCounter = 0;
    this.strikesCounter = 0;
    this.xAxisLabels = [];
    this.yAxisLabels = [];
  }

  ngOnInit(): void {
    this.amountOfSquares = this.amountOfRows * this.squaresPerRow;
    this.boardSquaresArr = new Array(this.amountOfSquares).fill(this.initSquareItem);
    this.spreadShips();

    for (let i = 0; i < this.squaresPerRow; i++) {
      this.xAxisLabels.push((i + 10).toString(36).toUpperCase());
      this.yAxisLabels.push(i + 1);
    }
  }

  private spreadShips() {
    for (let i = 0; i < this.amountOfShips; i++) {
      let randomSquare: number = Math.floor(Math.random() * this.amountOfSquares);

      while (this.boardSquaresArr[randomSquare].isShip) {
        randomSquare = Math.round(Math.random() * this.amountOfSquares);
      }

      this.boardSquaresArr[randomSquare] = { isShip: true, isClicked: false };
      // // WHY NOT WORKING?? 
      // this.boardSquaresArr[randomSquare].isShip = true;
    }
    console.log(this.boardSquaresArr);

  }


  public counter(length: number) {
    return new Array(length);
  }

  public squareClicked(squareIndex: number) {
    this.progressCounter++;

    // vvv BUG vvv
    // this.boardSquaresArr.find((item, index) => index === squareIndex && (item.isClicked = true));
    this.boardSquaresArr[squareIndex].isClicked = true;

    if (this.boardSquaresArr[squareIndex].isShip) {
      this.strikesCounter++;
    }

    if (this.strikesCounter === this.amountOfShips) {
      this.gameState = EGameState.WON;
      setTimeout(() => {
        alert("הודעת ניצחון");
      }, 300);
    }

    console.log(squareIndex);
    // clickedSquare.isClicked = true;
  }

}
