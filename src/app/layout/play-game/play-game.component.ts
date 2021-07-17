import { Component, OnInit } from '@angular/core';

import { EGameLevel, EGameState } from 'src/app/enums/battleship.enum';
import { IGameLevelsList } from './play-game.interface';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})

export class PlayGameComponent implements OnInit {
  public gameState: EGameState;
  public gameLevel: EGameLevel;
  public gameLevelsData: IGameLevelsList;

  constructor() {
    this.gameState = EGameState.PLAYING;
    this.gameLevel = EGameLevel.HARD;

    this.gameLevelsData = {
      1: {
        label: 'Easy',
        amountOfShips: 6,
        amountOfRows: 5,
        squaresPerRow: 5
      },
      2: {
        label: 'Medium',
        amountOfShips: 10,
        amountOfRows: 13,
        squaresPerRow: 9,
      },
      3: {
        label: 'Hard',
        amountOfShips: 15,
        amountOfRows: 12,
        squaresPerRow: 20,
      },
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
  
  public changeLevel(newGameLevel: string) {
    this.gameLevel = +newGameLevel;
    this.gameState = EGameState.PLAYING;
  }

}
