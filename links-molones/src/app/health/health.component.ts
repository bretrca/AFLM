import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) { }

  ngOnInit() {
  }

}
