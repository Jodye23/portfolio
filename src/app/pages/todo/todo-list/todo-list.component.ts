import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { STATUS_TODO } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { FormTaskModalComponent } from './form-task-modal/form-task-modal.component';
import { AuthService } from '../services/guards/auth.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  typeTodoStatus: STATUS_TODO[] = [
    STATUS_TODO.DONE,
    STATUS_TODO.RESCHEDULE,
    STATUS_TODO.TO_BE_DONE,
  ];
  todoList$: Observable<any> = new Observable<any>();
  ref: DynamicDialogRef | undefined;

  constructor(private translate: TranslateService, private authService: AuthService, private readonly todoService: TodoService, public dialogService: DialogService) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('it');
    this.todoList$ = this.todoService.getTodoList();
  }


  openFormTaskModal() {
    this.ref = this.dialogService.open(FormTaskModalComponent, { header: 'New task' });
  }

  changeStatus(type: STATUS_TODO, id: number) {
    this.todoService.changeStatus(type, id);
  }

  logoutUser() {
    this.authService.logout();
  }
}
