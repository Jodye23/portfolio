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
    { label: 'Nba', icon: 'pi pi-fw pi-tablet', routerLink: ['nba/home'], description: "Esplorate una home dettagliata e scoprite le varie squadre con una lista filtrabile per categoria" },
    { label: 'Imdb', icon: 'pi pi-fw pi-video', routerLink: ['imdb'], description: "Esplora vari film con una searchbar e scoprite con un solo click le informazioni sui film " },
    { label: 'Anime', icon: 'pi pi-fw pi-eye', routerLink: ['anime'], description: "Entra nel mondo degli anime con quest'app che utilizza un routing avanzato per navigare sui dettagli dei tuoi anime preferiti" },
    { label: 'Harry', icon: 'pi pi-fw pi-bolt', routerLink: 'harry', description: "Scopri i maghi del mondo di Harry Potter, i loro incantesimi più famosi e altri dettagli interessanti" },
    { label: 'Books', icon: 'pi pi-fw pi-book', routerLink: ['books'], description: "Una piattaforma completa con funzionalità CRUD per interagire con la tua lista di libri preferiti" },
    { label: 'To-do', icon: 'pi pi-fw pi-wrench', routerLink: ['login'], description: "Mantieni il controllo con un'app Todo dotata di uno stato sempre aggiornato grazie all'utilizzo del BehaviorSubject" }
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



  onIconClick(icon: any): void {
    if (icon.routerLink) {
      this.router.navigate(icon.routerLink);
    }
  }

}
