import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from './../module/auth/auth.service';

@Component({
	selector: 'header',
	template: `Welcome {{userDetail?.name}}<h4>This is header</h4>
				<a routerLink='/dashboard/home' routerLinkActive='active'>Home</a>&nbsp;
				<a routerLink='/dashboard/task' routerLinkActive='active'>Task</a>&nbsp;
				<a routerLink='/dashboard/todo' routerLinkActive='active'>Todo</a>&nbsp;`
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