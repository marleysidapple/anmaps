import { Component } from '@angular/core';
import { AuthService } from './../module/auth/auth.service';

@Component({
	selector: 'header',
	template: `{{userDetail | json}}<h4>This is header</h4><a routerLink='/dashboard/home' routerLinkActive='active'>Home</a>&nbsp;<a routerLink='/dashboard/task' routerLinkActive='active'>Task</a>&nbsp;<a routerLink='/dashboard/todo' routerLinkActive='active'>Todo</a>&nbsp;`
})


export class HeaderComponent {

	userDetail: string;

	ngOnInit() {
		this.getCurrentUser();
	}


	constructor(private authService: AuthService) { }


	getCurrentUser() {
		this.authService.getCurrentUser(localStorage.getItem('currentUser')).subscribe(
			(result) => {
					if (result){
						this.userDetail = result;
						//console.log(JSON.stringify(result.token));
						//console.log(result);
					}
				},

			err => {
				this.errMessage = 'this is an err';
			},

			() => {}

		);
	}


}