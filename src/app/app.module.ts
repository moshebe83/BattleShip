import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Layout
import { HomeComponent } from './layout/home/home.component';

// Components
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { NewGameFormComponent } from './components/new-game-form/new-game-form.component';

// Pipes & Directives
import { MatrixPipe } from './pipes/matrix.pipe';
import { GetIconPipe } from './pipes/get-icon.pipe';
import { OnlyDigitsDirective } from './services/only-digits.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameBoardComponent,
    MatrixPipe,
    GetIconPipe,
    NewGameFormComponent,
    OnlyDigitsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
