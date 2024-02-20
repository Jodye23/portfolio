import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  visibleInfo: boolean = false;
  visibleCv: boolean = false;
  visibleFigma: boolean = false;
  email = 'torrieromarcovalerio@gmail.com';
  cvSource: string = "../../assets/CV.pdf";
  title: string = 'cvPdf';
  colorScheme: string;

  showInfo() {
    this.visibleInfo = true;
  }

  showCv() {
    this.visibleCv = true;
  }

  showFigma() {
    this.visibleFigma = true;
  }

  constructor(private translate: TranslateService, private themeService: ThemeService) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }
  ngOnInit(): void {
    this.themeService.colorScheme$.subscribe((colorScheme) => {
      this.colorScheme = colorScheme;
    });
  }

}
