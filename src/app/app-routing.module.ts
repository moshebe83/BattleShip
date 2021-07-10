import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayGameComponent } from './layout/play-game/play-game.component';

const routes: Routes = [
  { path: 'battleship', component: PlayGameComponent },
  { path: '', pathMatch: 'full', redirectTo: 'battleship' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
