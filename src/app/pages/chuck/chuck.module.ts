import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuckRoutingModule } from './chuck-routing.module';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ChuckRoutingModule, PrimeNgModulesModule
  ]
})
export class ChuckModule { }
