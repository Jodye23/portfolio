import { Component } from '@angular/core';
import { HarryPotterService } from '../services/harry-potter.service';
import { Router } from '@angular/router';
import { Wizard } from '../models/wizard.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  wizards: Wizard[] = [];
  isLoading: boolean = false;

  constructor(private translate: TranslateService, private harryPotterService: HarryPotterService,
    private router: Router) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.harryPotterService.getWizards().subscribe((res: Wizard[]) => {
      this.wizards = res;
      this.isLoading = false;
    });
  }

  wizardDetail(id: string) {
    this.router.navigate([`harry/wizard-detail/${id}`]);
  }
}
