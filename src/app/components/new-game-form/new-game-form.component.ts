import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IGameLevelData } from 'src/app/layout/home/home.interface';

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.scss']
})

export class NewGameFormComponent implements OnInit {

  @Input() gameLevelFormGroup: FormGroup;

  @Output() newGameEmit: EventEmitter<IGameLevelData | undefined> = new EventEmitter<IGameLevelData | undefined>();

  constructor() {
    this.gameLevelFormGroup = {} as FormGroup;
  }

  ngOnInit(): void {
  }

  public newGameSubmitted(gameDataFormGroup: FormGroup): void {
    if (gameDataFormGroup.pristine) {
      this.newGameEmit.emit();
    } else {
      this.newGameEmit.emit(gameDataFormGroup.value);
    }

    gameDataFormGroup.reset();
  }
}
