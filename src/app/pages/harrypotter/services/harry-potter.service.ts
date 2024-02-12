import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ElixirDetail, Ingredient } from '../models/elixir.model';
import { Wizard } from '../models/wizard.model';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  baseUrl = 'https://wizard-world-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getWizards() {
    return this.http
      .get(`${this.baseUrl}/wizards`)
      .pipe(map((res: any) => res.map((wizard: any) => new Wizard(wizard))));
  }

  getWizardById(id: string) {
    return this.http
      .get(`${this.baseUrl}/wizards/${id}`)
      .pipe(map((res: any) => new Wizard(res)));
  }

  getElixirById(id: string) {
    return this.http
      .get(`${this.baseUrl}/elixirs/${id}`)
      .pipe(map((res: any) => new ElixirDetail(res)));
  }

  getIngredientById(id: string) {
    return this.http
      .get(`${this.baseUrl}/ingredients/${id}`)
      .pipe(map((res: any) => new Ingredient(res)));
  }
}
