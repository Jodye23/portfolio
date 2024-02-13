import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { PrimeNgModulesModule } from 'src/app/shared/prime-ng-modules/prime-ng-modules.module';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormTaskModalComponent } from './todo-list/form-task-modal/form-task-modal.component';
import { DialogService } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [LoginComponent, TodoListComponent, FormTaskModalComponent],
  imports: [
    CommonModule,
    TodoRoutingModule, PrimeNgModulesModule
  ],
  providers: [DialogService]
})
export class TodoModule { }
