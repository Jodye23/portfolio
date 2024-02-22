import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrazioneService } from '../services/registrazione.service';
import { IUser } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {
  userRegistration: FormGroup;
  users: IUser;
  alert: any;

  constructor(private fb: FormBuilder, private registrazione: RegistrazioneService, private router: Router) {
    this.userRegistration = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  save() {
    this.users = this.userRegistration.value;
    this.registrazione.saveUsers(this.users);
    this.alert = this.registrazione.returnAlert();


    if (!this.alert) {

      this.router.navigate(['babystats']);
    } else {
      window.alert(this.alert);
      this.registrazione.resetAlert();
    }
  }
}
