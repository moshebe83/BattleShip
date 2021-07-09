import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';

// Pipes
import { MatrixPipe } from './pipes/matrix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    MatrixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
