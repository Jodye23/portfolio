import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  visibleInfo: boolean = false;
  visibleCv: boolean = false;
  visibleFigma: boolean = false;
  email = 'torrieromarcovalerio@gmail.com';

  showInfo() {
    this.visibleInfo = true;
  }

  showCv() {
    this.visibleCv = true;
  }

  showFigma() {
    this.visibleFigma = true;
  }
}
