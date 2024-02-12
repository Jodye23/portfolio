import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  battutaRandom_Url = 'https://api.chucknorris.io/jokes/random';
  categorieBattute_Url = 'https://api.chucknorris.io/jokes/categories';
  battutaRandomCategoria_Url = 'https://api.chucknorris.io/jokes/random?category=';

  constructor(private http: HttpClient) {
  }

  getBattutaRandom(): Observable<any> {
    return this.http.get(this.battutaRandom_Url);
  }

  getCategorieBattute(): Observable<any> {
    return this.http.get(this.categorieBattute_Url);
  }

  getBattutaRandomByCategoria(categoria: string): Observable<any> {
    const url = `${this.battutaRandomCategoria_Url}${categoria}`;
    return this.http.get(url);
  }
}
