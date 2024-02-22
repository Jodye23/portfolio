import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NannaComponent } from './nanna/nanna.component';
import { PipiComponent } from './pipi/pipi.component';
import { PoppataComponent } from './poppata/poppata.component';
import { PupuComponent } from './pupu/pupu.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nanna',
    component: NannaComponent
  },
  {
    path: 'pipi',
    component: PipiComponent
  },
  {
    path: 'poppata',
    component: PoppataComponent
  },
  {
    path: 'pupu',
    component: PupuComponent
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: 'babystats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BabysRoutingModule { }
