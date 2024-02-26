import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private url = 'https://api.balldontlie.io/v1/teams';
  private headers = {
    'Authorization': 'efc38be1-d3d6-48c9-abff-3831bfb8bb3e'
  };

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<{ data: Team[]; }>(this.url, { headers: this.headers })
      .pipe(map(response => response.data));
  }
}
