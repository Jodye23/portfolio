import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { STATUS_TODO } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { FormTaskModalComponent } from './form-task-modal/form-task-modal.component';
import { AuthService } from '../services/guards/auth.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

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

  constructor(private readonly todoService: TodoService, private authService: AuthService, public dialogService: DialogService) {

    this.todoList$ = this.todoService.getTodoList();

  }


  openFormTaskModal() {
    this.ref = this.dialogService.open(FormTaskModalComponent, { header: 'Aggiungi un nuovo task' });
  }

  changeStatus(type: STATUS_TODO, id: number) {
    this.todoService.changeStatus(type, id);
  }

  logoutUser() {
    this.authService.logout();
  }
}
