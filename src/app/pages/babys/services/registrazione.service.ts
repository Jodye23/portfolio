import { Injectable } from '@angular/core';
import { IUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {
  userArray: IUser[] = [];
  presentUser: string | undefined = undefined;

  constructor() { }

  saveUsers(obj: IUser) {
    const existingUser = this.userArray.find((user) => user.name === obj.name);
    if (existingUser) {
      this.presentUser = 'User name presente';
    } else {
      this.userArray.push(obj);
      localStorage.setItem('users', JSON.stringify(this.userArray));
    }
    return this.userArray;
  };

  returnAlert() {
    return this.presentUser;
  }
  resetAlert() {
    return this.presentUser = undefined;
  }
}
