import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) { }

  ngOnInit() {
  }

}
