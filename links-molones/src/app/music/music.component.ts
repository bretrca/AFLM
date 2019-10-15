import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) { }

  ngOnInit() {
  }

}
