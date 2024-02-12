import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://search.imdbot.workers.dev/';


  constructor(private http: HttpClient) { }

  searchMovies(movieName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${movieName}`).pipe(
      map((response: any) => {
        return response.description;
      })
    );
  }

  getMovieDetails(imdbId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?tt=${imdbId}`).pipe(
      map((response: any) => {
        return {
          title: response.short.name,
          year: response.short.datePublished,
          description: response.short.description,
          image: response.short.image,
          genre: response.short.genre,
          keywords: response.short.keywords,
          actors: response.short.actors
        };
      })
    );
  }
}
