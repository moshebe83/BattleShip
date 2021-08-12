import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { path: 'battleship', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'battleship' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
