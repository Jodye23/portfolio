
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaRoutingModule } from './nba-routing.module';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';


@NgModule({
  declarations: [HomeComponent, TeamsComponent, NavbarComponent],
  imports: [
    CommonModule,
    NbaRoutingModule, PrimeNgModulesModule
  ]
})
export class NbaModule { }
