import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MenuItem[] | undefined = [];
  activeItem: MenuItem | undefined;


  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/nba'] },
      { label: 'Teams', icon: 'pi pi-fw pi-users', routerLink: ['teams'] },
    ];
    this.activeItem = this.items[0];
  }
}
