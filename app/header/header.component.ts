import { Component } from '@angular/core';


@Component({
	selector: 'header',
	template: `<h4>This is header</h4><a routerLink='/home' routerLinkActive='active'>Home</a>&nbsp;<a routerLink='/task' routerLinkActive='active'>Task</a>&nbsp;<a routerLink='/todo' routerLinkActive='active'>Todo</a>&nbsp;`
})


export class HeaderComponent { }