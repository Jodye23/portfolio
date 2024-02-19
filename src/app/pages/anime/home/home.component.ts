import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../models/anime.model';
import { AnimeService } from '../services/anime.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  search: string = '';
  animeList: Anime[] = [];

  constructor(private translate: TranslateService, private animeService: AnimeService, private router: Router) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }

  searchAnime() {
    this.animeService.getAnime(this.search).subscribe((res) => {
      this.animeList = res;
    });
  }

  animeDetail(id: number) {
    this.router.navigate([`anime/anime-detail/${id}`]);
  }
}
