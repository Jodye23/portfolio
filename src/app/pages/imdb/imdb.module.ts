import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImdbRoutingModule } from './imdb-routing.module';
import { HomeComponent } from './home/home.component';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ImdbRoutingModule, PrimeNgModulesModule
  ]
})
export class ImdbModule { }
