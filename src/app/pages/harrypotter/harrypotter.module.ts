import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarrypotterRoutingModule } from './harrypotter-routing.module';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';
import { HomeComponent } from './home/home.component';
import { WizardDetailComponent } from './wizard-detail/wizard-detail.component';
import { PotionDetailComponent } from './potion-detail/potion-detail.component';


@NgModule({
  declarations: [HomeComponent, WizardDetailComponent, PotionDetailComponent],
  imports: [
    CommonModule,
    HarrypotterRoutingModule, PrimeNgModulesModule
  ]
})
export class HarrypotterModule { }
