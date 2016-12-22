import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Auth } from './auth';


@Injectable()

export class AuthService {

	private url: string = 'http://localhost:8000/api';

	constructor(private _http: Http) { }


	postLogin(body: Object): Observable<any> {
		return this._http.post(this.url + '/auth/login', body)
			.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}




}