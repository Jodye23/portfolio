import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/guards/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = this.authService.getUser();

  constructor(private translate: TranslateService, private authService: AuthService, private router: Router) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }

  save(formValue: any) {
    console.log('form value', formValue);
    this.user = formValue.value;
    formValue.reset();
  }

  loginUser() {
    this.authService.login();
  }
}
