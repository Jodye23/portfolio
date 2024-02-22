import { Component, OnInit } from '@angular/core';
import { BabyService } from '../services/baby.service';
import { IBaby } from '../models/baby.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  babyArray: IBaby[] = [];

  constructor(private babyService: BabyService, private router: Router) {
  }


}
