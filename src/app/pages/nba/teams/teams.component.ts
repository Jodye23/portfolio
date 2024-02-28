import { Component, OnInit } from '@angular/core';
import { NbaService } from '../services/nba.service';
import { Team } from '../models/team.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  filterTerm: string = '';
  favorites: string[] = [];

  constructor(private nbaService: NbaService, private translate: TranslateService) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }

  ngOnInit(): void {
    this.nbaService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
      this.applyFavoritesFromStorage();
    });
  }

  getTeams(): void {
    this.nbaService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
      this.applyFavoritesFromStorage();
    });
  }

  applyFavoritesFromStorage(): void {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.teams.forEach(team => {
      team.favorite = favorites.includes(team.id);
    });
  }

  resetFilter(): void {
    this.filterTerm = '';
    this.getTeams();
  }

  toggleFavorite(team: Team): void {
    team.favorite = !team.favorite;
    const favorites = this.teams.filter(t => t.favorite).map(t => t.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

}
