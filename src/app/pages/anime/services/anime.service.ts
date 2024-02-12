import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Anime } from '../models/anime.model';
import { Episode } from '../models/episodes.model';
import { SingleEpisode } from '../models/singleEpisode.model';
import { Statistic } from '../models/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  baseUrl: string = 'https://api.jikan.moe/v4/anime';

  constructor(private http: HttpClient) { }

  getAnime(search: string): Observable<Anime[]> {
    return this.http
      .get(`${this.baseUrl}?q=${search}`)
      .pipe(map((res: any) => res.data.map((anime: any) => new Anime(anime))));
  }

  getAnimeById(id: string): Observable<Anime> {
    return this.http
      .get(`${this.baseUrl}/${id}`)
      .pipe(map((res: any) => new Anime(res.data)));
  }

  getEpisodes(id: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}/episodes`)
      .pipe(
        map((res: any) => res.data.map((episode: any) => new Episode(episode)))
      );
  }

  getStatistics(id: string) {
    return this.http
      .get(`${this.baseUrl}/${id}/statistics`)
      .pipe(map((res: any) => new Statistic(res.data)));
  }

  getEpisodesDetail(id: string, episodeId: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}/episodes/${episodeId}`)
      .pipe(
        map((res: any) => new SingleEpisode(res.data))
      );
  }
}
