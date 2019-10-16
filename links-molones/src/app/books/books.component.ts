import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchService } from '../services/fetch.service';
import {ANIMALS} from '../objects/animals.object';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
books=ANIMALS;
selectedBooks:any;
selectedDescriptor:any;
  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) { }

  ngOnInit() {/*TODO:  integrar los elementos de las arrays al elemento en cuestión (selectedAnimals) */
    this.fetchService.fetchedBooks()
     .then((response)=>{response.json()
      .then((data)=>{if(this.books.length<1)
      {this.books.push(data[`entries`])}else{return}}).catch(err=>console.log('error',err))})
      console.log(this.books) 
      //console.table(this.animals[0])
      this.selectedBooks=this.books[0]
    

  }
  openDescription(value){
    this.selectedDescriptor=this.selectedBooks[value];
    console.log(this.selectedDescriptor)
      }

}
