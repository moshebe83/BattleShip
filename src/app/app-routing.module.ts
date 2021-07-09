import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameBoardComponent } from './components/game-board/game-board.component';

const routes: Routes = [
  { path: 'battleship', component: GameBoardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'battleship' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
