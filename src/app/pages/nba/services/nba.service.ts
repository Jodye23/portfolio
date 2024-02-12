import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private url = 'https://free-nba.p.rapidapi.com/teams';
  private headers = {
    'X-RapidAPI-Key': '6fd61145f8mshe4acdfbcca3dd7ap1258a9jsn06022d61f486',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  };

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<{ data: Team[]; }>(this.url, { headers: this.headers })
      .pipe(map(response => response.data));
  }
}
