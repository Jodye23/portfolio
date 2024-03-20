import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroomingRoutingModule } from './grooming-routing.module';
import { HomeComponent } from './home/home.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { DettaglioPrenotazioneComponent } from './dettaglio-prenotazione/dettaglio-prenotazione.component';
import { EseguiPrenotazioneComponent } from './esegui-prenotazione/esegui-prenotazione.component';
import { LoginComponent } from './login/login.component';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';


@NgModule({
  declarations: [HomeComponent, PrenotazioniComponent, ListaPrenotazioniComponent, DettaglioPrenotazioneComponent, EseguiPrenotazioneComponent, LoginComponent],
  imports: [
    CommonModule,
    GroomingRoutingModule, PrimeNgModulesModule
  ]
})
export class GroomingModule { }
