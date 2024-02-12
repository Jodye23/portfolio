import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = {
    username: '',
    password: '',
    userLevel: '',
  };

  constructor(private router: Router) {
    if (localStorage.getItem("user")) {

      this.user = JSON.parse(localStorage.getItem("user")!);
    }
  }

  getUser() {
    return this.user;
  }

  login() {
    this.user = {
      username: 'marco',
      password: 'ciao',
      userLevel: '100',
    };
    localStorage.setItem("user", JSON.stringify(this.user));
    this.router.navigate(['login/todo']);
  }

  logout() {
    this.user = {
      username: '',
      password: '',
      userLevel: '0',
    };
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
