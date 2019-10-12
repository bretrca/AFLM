import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  constructor(
    private router :Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
  }

}
