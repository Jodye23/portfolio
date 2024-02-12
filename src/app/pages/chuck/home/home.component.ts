import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isCollapsed = true;
  battutaRandom: string = '';
  categorieBattute: any[] = [];

  constructor(private apiService: ApiService) { }

  mostraBattutaRandom() {
    this.apiService.getBattutaRandom().subscribe((data) => {
      this.battutaRandom = data.value;
    });
  }

  toggleMostraCategorie() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.categorieBattute = [];
    } else {
      this.apiService.getCategorieBattute().subscribe((data) => {
        this.categorieBattute = data;
        console.log(this.categorieBattute);
      });
    }
  }

  mostraBattutaRandomByCategoria(categoria: string) {
    this.apiService.getBattutaRandomByCategoria(categoria).subscribe((data) => {
      this.battutaRandom = data.value;
    });
  }

  resetBattuta() {
    this.battutaRandom = '';

  }
}
