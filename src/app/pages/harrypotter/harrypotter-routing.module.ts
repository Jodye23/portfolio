import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PotionDetailComponent } from './potion-detail/potion-detail.component';
import { WizardDetailComponent } from './wizard-detail/wizard-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'wizard-detail/:id',
    component: WizardDetailComponent,
  },
  {
    path: 'elixir-detail/:id',
    component: PotionDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarrypotterRoutingModule { }
