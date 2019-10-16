import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchService } from '../services/fetch.service';
import {ANIMALS} from '../objects/animals.object';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  songs=ANIMALS;
  selectedSongs:any;
  
  selectedDescriptor:any;
  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) { }
  ngOnInit() {
    /*TODO:  integrar los elementos de las arrays al elemento en cuestión (selectedAnimals) */
    this.fetchService.fetchMusic()
     .then((response)=>{response.json()
      .then((data)=>{if(this.songs.length<1)
      {this.songs.push(data[`entries`])}else{return}}).catch(err=>console.log('error',err))})
      //console.log(this.songs) 
      //console.table(this.animals[0])
      this.selectedSongs=this.songs[0]
    
      
      }
      openDescription(value){
    this.selectedDescriptor=this.selectedSongs[value];
    console.log(this.selectedDescriptor)
      }
    }
    