import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioPrenotazioneComponent } from './dettaglio-prenotazione/dettaglio-prenotazione.component';
import { EseguiPrenotazioneComponent } from './esegui-prenotazione/esegui-prenotazione.component';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { LoginComponent } from './login/login.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prenotazioni', component: PrenotazioniComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lista-prenotazioni', component: ListaPrenotazioniComponent },
  { path: 'dettaglio-prenotazione/:id', component: DettaglioPrenotazioneComponent },
  { path: 'esegui-prenotazione/:id', component: EseguiPrenotazioneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroomingRoutingModule { }
