import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animalElement=false;
  booksElement=false;
  musicElement=false;
  healthElement=false;
  constructor( private routesService: RoutesService) { }

  ngOnInit() {
    console.log(this.animalElement)

    this.routesService.returnRoute(this.animalElement);
    console.log(this.animalElement)
   
  }

  routeValidation(){
    console.log('tenemos que hacer una función que valga la pena')
    
  }
}
 