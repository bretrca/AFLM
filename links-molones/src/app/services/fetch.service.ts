import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})


export class FetchService {
 fetchedAnimals=[];
    constructor(private http:HttpClient) {
        
   }

   fetchAnimals(){
       return fetch(`https://api.publicapis.org/entries?category=animals`);
   }
   fetchedBooks(){
     return fetch('https://api.publicapis.org/entries?category=books');
   }
   fetchHealth(){
    return fetch('https://api.publicapis.org/entries?category=health');
  }
  fetchMusic(){
    return fetch('https://api.publicapis.org/entries?category=music');
  }
}