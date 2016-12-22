import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Response } from '@angular/http';
import { AuthService } from './auth.service';



@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: './auth.html',
	styleUrls: ['css/style.css'],
})


export class AuthComponent { 


	public errMessage: string;
	auth: FormGroup;


	constructor(fb: FormBuilder, private authService: AuthService, private _router: Router) { 
		this.auth = fb.group({
			'email': [null, Validators.required],
			'password': [null, Validators.required]
		})

	}


	validateUser(value: any){
		this.authService.postLogin(value).subscribe(
			(result) => {
					if (result){
						//console.log(JSON.stringify(result.token));
						localStorage.setItem('currentUser', JSON.stringify(result.token));
						this._router.navigateByUrl('dashboard/home');
					}
				},

			err => {
				this.errMessage = 'Invalid Email/Password Combination';
			},

			() => {}

		);
	}


}