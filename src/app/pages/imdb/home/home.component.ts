import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchInput: string = '';
  searchResults: any[] = [];
  selectedMovie: any;
  exampleMovies: any[] = [
    { title: 'Pulp Fiction', year: '1994', image: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg' },
    { title: 'La Città Incantata', year: '2003', image: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' },
    { title: "Harry Potter: L'Ordine della Fenice", year: '2007', image: 'https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg' },
    { title: 'Il Signore degli Anelli: Le Due Torri', year: '2002', image: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg' },
    { title: 'Paid in Full', year: '2002', image: 'https://m.media-amazon.com/images/M/MV5BZWU5YmRhODYtM2Y2Ny00NTUzLWEwZGUtYzYyMjQwZmIwYTgxXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_.jpg' },
    { title: 'Titanic', year: '1997', image: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg' },
    { title: 'Shining', year: '1980', image: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg' },
    { title: 'Matrix', year: '1999', image: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg' },
    { title: 'Il Padrino', year: '1972', image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg' },
    { title: 'The Wolf of Wall Street', year: '2013', image: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg' },
    { title: '8 Mile', year: '2002', image: 'https://m.media-amazon.com/images/M/MV5BZDE3NDZmMGUtZjhjOS00MmIyLTkyMzAtMzM4ZjNhZThiY2ViXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg' },
    { title: 'Il Cavaliere Oscuro', year: '2008', image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg' }
  ];



  constructor(private apiService: ApiService) { }



  searchMovies(): void {
    this.apiService.searchMovies(this.searchInput).subscribe((results: any) => {
      this.searchResults = results;
    });
  }

  selectMovie(movieId: string): void {
    this.apiService.getMovieDetails(movieId).subscribe((details: any) => {
      this.selectedMovie = details;
    });
    this.searchResults = [];

  }
}
