import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { AuthService } from './auth.service';


@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: './auth.html',
	styleUrls: ['css/style.css'],
})


export class AuthComponent { 


	auth: FormGroup;


	constructor(fb: FormBuilder, private authService: AuthService) { 
		this.auth = fb.group({
			'email': [null, Validators.required],
			'password': [null, Validators.required]
		})

	}


	validateUser(value: any){
		this.authService.postLogin(value).subscribe((result) => {
			console.log(result);
		});
	}


}