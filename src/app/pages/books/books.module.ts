import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';


@NgModule({
  declarations: [HomeComponent, LibraryComponent],
  imports: [
    CommonModule,
    BooksRoutingModule, PrimeNgModulesModule
  ]
})
export class BooksModule { }
