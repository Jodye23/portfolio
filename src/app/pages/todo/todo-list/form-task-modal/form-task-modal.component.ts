import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-form-task-modal',
  templateUrl: './form-task-modal.component.html',
  styleUrl: './form-task-modal.component.scss'
})
export class FormTaskModalComponent {
  todoForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: [''],
  });
  constructor(private readonly formBuilder: FormBuilder, private readonly todoService: TodoService) {

  }

  addTodo() {
    const todoToAdd = new Todo();
    todoToAdd.title = this.todoForm.get('title')?.value;
    todoToAdd.description = this.todoForm.get('description')?.value;
    console.log(todoToAdd);
    this.todoService.addTodo(todoToAdd);
    this.todoForm.reset();
    // this.ngbActiveModal.close();
  }

  closeTodoModal() {
    // this.ngbActiveModal.close();

  }
}
