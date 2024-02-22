import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  icons = [
    { label: 'Nba', icon: 'pi pi-fw pi-tablet', routerLink: ['nba/home'], description: "Esplora una home estetica e scopri squadre con una lista filtrabile. Un'esperienza coinvolgente per gli amanti della pallacanestro!" },
    { label: 'Imdb', icon: 'pi pi-fw pi-video', routerLink: ['imdb'], description: "Esplora film con una ricerca avanzata, dettagliate informazioni sui film e un'interfaccia intuitiva. Scopri il mondo del cinema in un clic!" },
    { label: 'Anime', icon: 'pi pi-fw pi-eye', routerLink: ['anime'], description: "Entra nel mondo degli anime con una navigazione avanzata, modelli accattivanti e una barra di ricerca dinamica. L'avventura ti aspetta!" },
    { label: 'Harry', icon: 'pi pi-fw pi-bolt', routerLink: 'harry', description: "Entra nel mondo degli anime con una navigazione avanzata, modelli accattivanti e una barra di ricerca dinamica. L'avventura ti aspetta!" },
    { label: 'Books', icon: 'pi pi-fw pi-book', routerLink: ['books'], description: "Una piattaforma completa con funzionalità CRUD per interagire con la tua lista di libri preferiti. Scopri, leggi, gestisci!" },
    { label: 'To-do', icon: 'pi pi-fw pi-wrench', routerLink: ['login'], description: "Mantieni il controllo con un'app Todo dotata di uno stato sempre aggiornato grazie all'utilizzo del BehaviorSubject. Sicura e organizzata!" },
    { label: 'Babies', icon: 'pi pi-fw pi-user-plus', routerLink: ['babystats'], description: "Descrizione Babies" }
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

  constructor(private translate: TranslateService, private themeService: ThemeService, private router: Router) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }
  ngOnInit(): void {
    this.themeService.colorScheme$.subscribe((colorScheme) => {
      this.colorScheme = colorScheme;
    });
  }

  onIconClick(icon: any): void {
    if (icon.routerLink) {
      this.router.navigate(icon.routerLink);
    }
  }

}
