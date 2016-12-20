import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
	selector: 'my-app',
	template: `<li *ngFor="let item of todos; let i = index; trackBy: trackByFn">{{item.title}}</li>`
})

export class TodoComponent{ 

		todos: Todo[];

	   constructor(private _todoService: TodoService) { }

		ngOnInit(){
			this.getAllTodo();
		}


		getAllTodo(){
			this._todoService.getAll()
							 .subscribe(todos => this.todos = todos, 
							 err => {
							 	console.log(err);
							 });
		}

	
}