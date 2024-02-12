
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'anime-detail/:id',
    component: AnimeDetailComponent
  },
  {
    path: 'episode-detail/:animeid/episode/:id',
    component: EpisodeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
