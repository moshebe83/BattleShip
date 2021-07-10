import { Component, OnInit } from '@angular/core';

import { EGameState } from 'src/app/enums/enums.enum';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})

export class PlayGameComponent implements OnInit {
  public gameState: EGameState = EGameState.PLAYING;

  constructor() { }

  ngOnInit(): void {
  }

  public gameStateChanged(newGameState: EGameState) {
    this.gameState = newGameState;
  }

  public newGame() {
    this.gameState = EGameState.PLAYING;
  }

}
