import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchService } from '../services/fetch.service';
import {ANIMALS} from '../objects/animals.object';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
 health=ANIMALS;
 selectedHealty:any;
 selectedDescriptor:any;
  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) { }

  ngOnInit() {
    this.fetchService.fetchHealth()
 .then((response)=>{response.json()
  .then((data)=>{if(this.health.length<1)
  {this.health.push(data[`entries`])}else{return}}).catch(err=>console.log('error',err))})
  console.log(this.health) 
  //console.table(this.animals[0])
  this.selectedHealty=this.health[0]

  
  }
  openDescription(value){
    this.selectedDescriptor=this.selectedHealty[value];
    console.log(this.selectedDescriptor)
  }
}
