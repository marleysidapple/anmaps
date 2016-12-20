import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Todo } from './todo';

@Injectable()

export class TodoService {

	private url: string = 'https://jsonplaceholder.typicode.com';

	constructor(private _http: Http){ }

	getAll(): Observable<Todo[]>{
		return this._http.get(this.url + '/todos').map((res: Response) => res.json());
	}


}