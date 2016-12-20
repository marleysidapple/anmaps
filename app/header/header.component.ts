import { Component } from '@angular/core';


@Component({
	selector: 'header',
	template: `<h4>This is header</h4><a routerLink='/home'>Home</a>&nbsp;<a routerLink='/task'>Task</a>&nbsp;<a routerLink='/todo'>Todo</a>&nbsp;`
})


export class HeaderComponent { }