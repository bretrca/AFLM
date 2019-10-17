import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterLink, Router } from '@angular/router';


@Injectable({
    providedIn:'root'
})


export class RoutesService {
  animalElement:boolean;
  booksElement:boolean;
  musicElement:boolean;
  healthElement:boolean;
    constructor(
      private http:HttpClient,
      private router: Router
      ) {}

    returnRoute(element){
      this.router.navigate[('/animals')]

 element = true;
  return element;
  }
      
    
}