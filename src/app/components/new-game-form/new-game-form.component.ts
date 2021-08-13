import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IGameLevelData } from 'src/app/layout/home/home.interface';

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.scss']
})

export class NewGameFormComponent implements OnInit {

  @Input() maxColumns: number | undefined;
  @Input() gameLevelFormGroup: FormGroup;

  @Output() newGameEmit: EventEmitter<IGameLevelData | undefined> = new EventEmitter<IGameLevelData | undefined>();

  constructor() {
    this.gameLevelFormGroup = {} as FormGroup;
  }

  ngOnInit(): void {
  }

  public newGameSubmitted(gameLevelFormGroup: FormGroup): void {
    Object.values(gameLevelFormGroup.controls).map(control => control.errors && control.reset());

    if (gameLevelFormGroup.pristine) {
      this.newGameEmit.emit();
    } else {
      this.newGameEmit.emit(gameLevelFormGroup.value);
    }

    gameLevelFormGroup.reset();
  }
}
