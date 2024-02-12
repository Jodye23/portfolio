import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, PrimeNgModulesModule
  ]
})
export class HomeModule { }
