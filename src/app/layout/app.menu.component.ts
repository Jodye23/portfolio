import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Projects',
                items: [
                    { label: 'Nba', icon: 'pi pi-fw pi-tablet', routerLink: ['nba'] },
                    { label: 'Imdb', icon: 'pi pi-fw pi-video', routerLink: ['imdb'] },
                    { label: 'Anime', icon: 'pi pi-fw pi-eye', routerLink: ['anime'] },
                    { label: 'Harry', icon: 'pi pi-fw pi-bolt', routerLink: 'harry' },
                    { label: 'Books', icon: 'pi pi-fw pi-book', routerLink: ['books'] },
                    { label: 'To-do', icon: 'pi pi-fw pi-wrench', routerLink: ['login'] },
                ]
            },
        ];
    }
}
