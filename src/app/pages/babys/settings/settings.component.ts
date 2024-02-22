import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BabyService } from '../services/baby.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  babyDescription: FormGroup;

  constructor(private fb: FormBuilder, private babyService: BabyService) {
    this.babyDescription = this.fb.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      born: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  addChild() {
    this.babyService.setBabies(this.babyDescription.value);
  }
}
