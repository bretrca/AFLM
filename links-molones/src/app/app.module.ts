import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { HealthComponent } from './health/health.component';
import { RulesComponent } from './rules/rules.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
//import{HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    BooksComponent,
    MusicComponent,
    HealthComponent,
    RulesComponent
    //HttpModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
