import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import { FetchService } from '../services/fetch.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Object, Ob } from '../objects/objects';
import {ANIMALS} from '../objects/animals.object';
import { RoutesService } from '../services/routes.service';
import { defaultCipherList } from 'constants';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
animals=ANIMALS;
selectedAnimals:any;

entriesInfo:any;   
counter:number;
Description:string;
api:string;
data;
element;

  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private fetchService: FetchService,
    private routesService: RoutesService

  ) { }

  ngOnInit() {
/*TODO:  integrar los elementos de las arrays al elemento en cuestión (selectedAnimals) */
this.fetchService.fetchAnimals()
 .then((response)=>{response.json()
  .then((data)=>{if(this.animals.length<1)
  {this.animals.push(data[`entries`])}else{return}}).catch(err=>console.log('error',err))})
  //console.log(this.animals)
  
  //console.table(this.animals[0])
  this.selectedAnimals=this.animals[0]
  //console.log(this.selectedAnimals)
/*   this.animals.filter(ele=>ele[0])
  console.log(this.animals) */
  
  }
}
