import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { HomeComponent } from './components/home/home.component';
import { StudentApplicationComponent } from './components/student-application/student-application.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'characters/house/:parm', component: CharactersListComponent },
  { path: 'characters/:parm', component: CharactersListComponent },
  { path: 'student-apply', component: StudentApplicationComponent },
  { path: 'characters', redirectTo: 'characters/all' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
