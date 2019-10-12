import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
    providedIn:'root'
})

export class FetchService{

    private apiUrl='https://api.publicapis.org/entries?category=animals';
    data :any = {};

    constructor(
private http: Http
    ){
        this.getAnimals();
        this.getData();

    }
    getData(){
        return this.http.get(this.apiUrl).map(
            (res:Response)=> res.json()
        )
}
    getAnimals(){
this.getData().subscribe(data=>{
    console.log(data);
    this.data=data;
})
    }
}