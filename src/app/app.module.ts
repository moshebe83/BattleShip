import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Layout
import { PlayGameComponent } from './layout/play-game/play-game.component';

// Components
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';

// Pipes
import { MatrixPipe } from './pipes/matrix.pipe';
import { GetIconPipe } from './pipes/get-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    MatrixPipe,
    PlayGameComponent,
    GetIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
