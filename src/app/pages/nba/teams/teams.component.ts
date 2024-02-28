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
    this.getTeams();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.length > 0) {
      this.teams.forEach(team => {
        team.favorite = favorites.includes(team.id);
      });
    }
  }

  getTeams(): void {
    this.nbaService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      this.teams.forEach(team => {
        if (favorites.includes(team.id)) {
          team.favorite = true;
        }
      });
    });
  }

  applyFilter(): void {
    if (this.filterTerm) {
      const filteredTeams = this.teams.filter(team =>
        team.conference.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        team.division.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        team.full_name.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        team.name.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        team.city.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        team.abbreviation.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
      this.teams = [...filteredTeams];
    } else {
      this.getTeams();
    }
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
