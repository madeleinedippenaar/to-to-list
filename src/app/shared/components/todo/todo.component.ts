import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {completed: false, task: 'fold clothes'},
      {completed: false, task: 'put clothes in dresser'},
      {completed: false, task: 'relax'},
      {completed: true, task: 'try to pet cat'},
      {completed: false, task: 'pet dog'},
      {completed: false, task: 'be awesome'}
    ];
  }

  completeClicked(todoItem: Todo) {
    todoItem.completed = true;
  }

}
