import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleEpisode } from '../models/singleEpisode.model';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.scss'
})
export class EpisodeDetailComponent {
  episodeId: string = '';
  episode: SingleEpisode = new SingleEpisode();
  animeId: string = '';

  constructor(private animeService: AnimeService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.episodeId = params['id'];
      this.animeId = params['animeid'];
      this.animeService.getEpisodesDetail(this.animeId, this.episodeId).subscribe((res: SingleEpisode) => {
        this.episode = res;
        console.log(res);

      });
    });
  }

  backtoAnime() {
    window.history.back();
  }

  backtoHome() {
    this.router.navigate(['/anime']);
  }
}
