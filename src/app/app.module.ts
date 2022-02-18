import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CharacterComponent } from './components/characters-list/character/character.component';
import { HomeComponent } from './components/home/home.component';
import { StudentApplicationComponent } from './components/student-application/student-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CharactersListComponent,
    PageHeaderComponent,
    CharacterComponent,
    HomeComponent,
    AgePipe,
    StudentApplicationComponent,
    SearchFormComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
