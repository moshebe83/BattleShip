import { Component, OnInit } from '@angular/core';

import { EGameLevel, EGameState } from 'src/app/enums/battleship.enum';
import { IGameLevelsList } from './play-game.interface';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})

export class PlayGameComponent implements OnInit {
  public gameState: EGameState = EGameState.PLAYING;
  public gameLevel: EGameLevel = EGameLevel.HARD;

  public gameLevelsData: IGameLevelsList = {
    1: {
      amountOfShips: 6,
      amountOfRows: 6,
      squaresPerRow: 6
    },
    2: {
      amountOfShips: 9,
      amountOfRows: 9,
      squaresPerRow: 9,
    },
    3: {
      amountOfShips: 12,
      amountOfRows: 12,
      squaresPerRow: 12,
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

  public gameStateChanged(newGameState: EGameState) {
    this.gameState = newGameState;
  }

  public newGame() {
    this.gameState = EGameState.PLAYING;
  }

  public changeLevel() {
    switch (this.gameLevel) {
      case EGameLevel.EASY:
        this.gameLevel = EGameLevel.MEDIUM;
        break;
      case EGameLevel.MEDIUM:
        this.gameLevel = EGameLevel.HARD;
        break;
      case EGameLevel.HARD:
        this.gameLevel = EGameLevel.EASY;
        break;
      default:
        this.gameLevel = EGameLevel.EASY;
        break;
    }
  }

}
