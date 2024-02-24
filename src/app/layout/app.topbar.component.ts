import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    isDarkButtonVisible = false;
    isLightButtonVisible = true;

    languages: any[] = [
        { label: 'IT', value: 'it', flag: './../../assets/it.png' },
        { label: 'EN', value: 'en', flag: './../../assets/en.png' },

    ];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private translate: TranslateService) { }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    changeTheme(theme: string, colorScheme: string) {
        this.theme = theme;
        this.colorScheme = colorScheme;
        if (colorScheme === 'dark') {
            this.isDarkButtonVisible = false;
            this.isLightButtonVisible = true;
        } else if (colorScheme === 'light') {
            this.isDarkButtonVisible = true;
            this.isLightButtonVisible = false;
            this.colorScheme = 'light';
        }
    }

    changeLanguage(val: any) {
        const selectedLanguage = val.value.value;


        this.translate.use(selectedLanguage);
    }
}
