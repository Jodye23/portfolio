import { Injectable } from '@angular/core';
import { IBaby } from '../models/baby.model';

@Injectable({
  providedIn: 'root'
})
export class BabyService {
  babies: IBaby[] = [];
  constructor() { }

  setBabies(obj: IBaby) {
    console.log(this.babies);
    this.babies.push(obj);
    localStorage.setItem('baby', JSON.stringify(this.babies));
    return this.babies;
  }

  takeBabies() {
    return this.babies;
  }
}
