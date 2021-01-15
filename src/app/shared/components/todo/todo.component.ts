import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[] = [
    {completed: false, task: 'fold clothes'},
    {completed: false, task: 'put clothes in dresser'},
    {completed: false, task: 'relax'},
    {completed: true, task: 'try to pet cat'},
    {completed: false, task: 'pet dog'},
    {completed: false, task: 'be awesome'},
  ];

  filteredTodos: Todo[] = [];

  taskName: string = '';
  filterValue: string = '';
  

  constructor() { }

  ngOnInit(): void {
    this.filteredTodos = this.todos;
  }

  filterTodos(): void {
    console.log(this.filterValue);
    this.filteredTodos = this.todos.filter(todo => todo.task.includes(this.filterValue));
  }

  completeClicked(todoItem: Todo) {
    todoItem.completed = true;
  }

  deleteTodo(i: number): void {
    this.todos.splice(i,1)
    this.filteredTodos = this.todos;
    this.filterValue = '';
  }
  addTodo () {
    const todoItem: Todo = {
      task: this.taskName,
      completed: false
    }
    this.todos.push(todoItem);
    this.taskName = '';
  }

}