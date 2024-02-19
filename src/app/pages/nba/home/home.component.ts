import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PhotoService } from 'src/app/demo/service/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
  }


}
