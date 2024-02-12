import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElixirDetail } from '../models/elixir.model';
import { HarryPotterService } from '../services/harry-potter.service';

@Component({
  selector: 'app-potion-detail',
  templateUrl: './potion-detail.component.html',
  styleUrl: './potion-detail.component.scss'
})
export class PotionDetailComponent {
  isLoading: boolean = true;
  elixirId: string = '';
  elixir: ElixirDetail = new ElixirDetail();

  constructor(
    private route: ActivatedRoute,
    private harryPotterService: HarryPotterService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.elixirId = params['id'];
    });
  }

  ngOnInit(): void {
    this.harryPotterService
      .getElixirById(this.elixirId)
      .subscribe((res: ElixirDetail) => {
        this.elixir = res;
        this.isLoading = false;
      });
  }

  backtoWizard() {
    window.history.back();
  }
}
