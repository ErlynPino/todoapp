import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterType, TodoModel } from '../../models/todo';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todolist = signal<TodoModel[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
      editing: false
    },
    {
      id: 2,
      title: 'Learn React',
      completed: false,
      editing: false
    },
    {
      id: 3,
      title: 'Learn Vue',
      completed: false,
      editing: false
    },
  ]);

  filter = signal<FilterType>('all');

  newTodo = new FormControl('asasdadsdasdad', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)]
  })

  changeFilter(filterString: FilterType){
    this.filter.set(filterString);
  }
}
