import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wizard } from '../models/wizard.model';
import { HarryPotterService } from '../services/harry-potter.service';

@Component({
  selector: 'app-wizard-detail',
  templateUrl: './wizard-detail.component.html',
  styleUrl: './wizard-detail.component.scss'
})
export class WizardDetailComponent {
  isLoading: boolean = true;
  wizardId: string = '';
  wizard: Wizard = new Wizard();

  constructor(
    private route: ActivatedRoute,
    private harryPotterService: HarryPotterService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.wizardId = params['id'];
    });
  }

  ngOnInit(): void {
    this.harryPotterService
      .getWizardById(this.wizardId)
      .subscribe((res: Wizard) => {
        this.wizard = res;
        this.isLoading = false;
      });
  }

  elixirDetail(id: string) {
    this.router.navigate([`harry/elixir-detail/${id}`]);
  }
}
