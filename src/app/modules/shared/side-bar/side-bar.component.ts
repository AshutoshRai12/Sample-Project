import { Component } from '@angular/core';
import { heroRoutes } from '../../hero/hero-route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  heroRoutes: typeof heroRoutes;
  constructor(    private router: Router,
  ){
    this.heroRoutes = heroRoutes;
  }

}
