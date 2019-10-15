import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})


export class RoutesService {

    constructor(private http:HttpClient) {
        
   }
/*     url = `https://api.publicapis.org/entries?category=animals`;
  getAnimals():Observable<Object[]> {
    return this.http.get<Object[]>(this.url);
  } */

apiUrl=`https://api.publicapis.org/entries?category=animals`;
getPost(){
    return this.http.get(this.apiUrl)
 }

   fetchAnimals(){
       return fetch(`https://api.publicapis.org/entries?category=animals`);
   }
}