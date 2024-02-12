import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { HomeComponent } from './home/home.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';


@NgModule({
  declarations: [HomeComponent, AnimeDetailComponent, EpisodeDetailComponent],
  imports: [
    CommonModule,
    AnimeRoutingModule, PrimeNgModulesModule
  ]
})
export class AnimeModule { }
