import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  cvSource: string = "../../assets/CV.pdf";
  title: string = 'cvPdf';

  showInfo() {
    this.visibleInfo = true;
  }

  showCv() {
    this.visibleCv = true;
  }

  showFigma() {
    this.visibleFigma = true;
  }

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }
}
