import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHistoryComponent } from './add-history/add-history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'add-history', component: AddHistoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
