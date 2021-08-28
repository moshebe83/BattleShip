import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EGameState } from 'src/app/services/battleship.enum';
import { ISquareItem } from '../game-board.interface';

@Component({
  selector: 'app-game-board-square',
  templateUrl: './game-board-square.component.html',
  styleUrls: ['./game-board-square.component.scss']
})

export class GameBoardSquareComponent implements OnInit {
  @Output() squareClickedEmit: EventEmitter<ISquareItem> = new EventEmitter<ISquareItem>();

  @Input() square: ISquareItem;
  @Input() gameState: EGameState;

  public EGameState: typeof EGameState;

  constructor() {
    this.square = {} as ISquareItem;
    this.gameState = EGameState.PLAYING;
    this.EGameState = EGameState;
  }

  ngOnInit(): void {   
  }

  public squareClicked(square: ISquareItem): void {
    this.squareClickedEmit.emit(square);
  }

}
