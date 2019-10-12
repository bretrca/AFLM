import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { HealthComponent } from './health/health.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'music', component: MusicComponent },
  { path: 'health', component: HealthComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
