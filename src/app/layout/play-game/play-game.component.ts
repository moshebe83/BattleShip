import { Component, OnInit } from '@angular/core';

import { EGameLevel, EGameState } from 'src/app/enums/battleship.enum';
import { IGameLevelData, IStateMsgs } from './play-game.interface';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})

export class PlayGameComponent implements OnInit {
  public gameState: EGameState;
  public gameLevelsData: IGameLevelData;
  public stateMsgs: IStateMsgs;

  constructor() {
    this.gameState = EGameState.PLAYING;
    
    this.gameLevelsData = {
      gameLevel: EGameLevel.MEDIUM,
      amountOfShips: 10,
      amountOfRows: 10,
      squaresPerRow: 10,
      amountOfSquares: 100,
    }

    this.stateMsgs = {
      winF: "You Go Girl!",
      winM: "You're The Man 👨",
    }
  }

  ngOnInit(): void {
  }

  public gameStateChanged(newGameState: EGameState) {
    this.gameState = newGameState;
  }

  public newGame() {
    this.gameState = EGameState.PLAYING;
  }

}
