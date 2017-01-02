import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from './../module/auth/auth.service';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	templateUrl: './header.html'
})


export class HeaderComponent {

	userDetail:Object;

	ngOnInit() {
		this.getCurrentUser();
	}


	constructor(private authService: AuthService) { }


	getCurrentUser() {
		this.authService.getCurrentUser(localStorage.getItem('currentUser')).subscribe(
			(result) => {
					if (result){
						this.userDetail = result;
					}
				},

			err => {
				console.log('err');
			},

			() => {}

		);
	}


}