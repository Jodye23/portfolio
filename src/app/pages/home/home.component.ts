import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  icons = [
    { label: 'Nba', icon: 'pi pi-fw pi-tablet', routerLink: ['nba/home'], description: "NBA_DESCRIPTION" },
    { label: 'Imdb', icon: 'pi pi-fw pi-video', routerLink: ['imdb'], description: "IMDB_DESCRIPTION" },
    { label: 'Anime', icon: 'pi pi-fw pi-eye', routerLink: ['anime'], description: "ANIME_DESCRIPTION" },
    { label: 'Harry', icon: 'pi pi-fw pi-bolt', routerLink: 'harry', description: "HARRY_DESCRIPTION" },
    { label: 'Books', icon: 'pi pi-fw pi-book', routerLink: ['books'], description: "BOOKS_DESCRIPTION" },
    { label: 'To-do', icon: 'pi pi-fw pi-wrench', routerLink: ['login'], description: "TODO_DESCRIPTION" }
  ];

  showInfo() {
    this.visibleInfo = true;
  }

  showCv() {
    this.visibleCv = true;
  }

  showFigma() {
    this.visibleFigma = true;
  }

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }

  getTranslatedDescription(key: string): string {
    return this.translate.instant(key);
  }


  onIconClick(icon: any): void {
    if (icon.routerLink) {
      this.router.navigate(icon.routerLink);
    }
  }

}
