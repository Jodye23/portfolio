import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string;
  password: string;
  usersLogin: IUser[] = [];

  constructor(private router: Router) {
    const user = localStorage.getItem('users');
    if (user) {
      this.usersLogin = JSON.parse(user);

    }
  }

  goToRegistrer() {
    this.router.navigate(['babystats/registrazione']);
  }

  goToHome() {
    const userNam = this.usersLogin.find(user => user.name === this.username);

    if (userNam) {
      this.router.navigate(['babystats/home']);
    } else {
      window.alert('Credenziali non valide');
    }

  }
}
