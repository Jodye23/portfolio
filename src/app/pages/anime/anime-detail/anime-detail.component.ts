import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../models/anime.model';
import { Episode } from '../models/episodes.model';
import { Statistic } from '../models/statistics.model';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.scss'
})
export class AnimeDetailComponent {
  animeId: string = '';
  anime: Anime = new Anime();
  statistics: Statistic = new Statistic();
  episodes: Episode[] = [];

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.animeId = params['id'];
      this.animeService.getAnimeById(this.animeId).subscribe((res: Anime) => {
        this.anime = res;
      });
      this.animeService
        .getEpisodes(this.animeId)
        .subscribe((res: Episode[]) => {
          this.episodes = res;
        });
      this.animeService
        .getStatistics(this.animeId)
        .subscribe((res: Statistic) => {
          this.statistics = res;
        });
    });
  }

  episodeDetail(id: number) {
    this.router.navigate([`anime/episode-detail/${this.animeId}/episode/${id}`]);
  }

  backtoHome() {
    this.router.navigate(['/anime']);
  }
}
