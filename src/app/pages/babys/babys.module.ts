import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BabysRoutingModule } from './babys-routing.module';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { PupuComponent } from './pupu/pupu.component';
import { PoppataComponent } from './poppata/poppata.component';
import { PipiComponent } from './pipi/pipi.component';
import { NannaComponent } from './nanna/nanna.component';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [HomeComponent, StatsComponent, SettingsComponent, PupuComponent, PoppataComponent, PipiComponent, NannaComponent, RegistrazioneComponent, LoginComponent],
  imports: [
    CommonModule,
    BabysRoutingModule, PrimeNgModulesModule
  ]
})
export class BabysModule { }
