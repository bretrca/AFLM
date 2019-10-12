import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'links-molones';

  constructor(
    private router: Router
  ) { }
}
