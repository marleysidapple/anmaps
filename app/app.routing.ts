import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { AuthComponent } from './module/auth/auth.component';
import { HomeComponent } from './module/home/home.component';
import { TaskComponent } from './module/task/task.component';
import { TodoComponent } from './module/todo/todo.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';






export const routes:Routes = [

	//defining auth routes
	{ path: '', redirectTo: '/auth/login', pathMatch: 'full' },
	{path: 'auth', children: [		
		{path: '', pathMatch: 'full', redirectTo: 'auth/login'},
		{path: 'login', component: AuthComponent }

	]},

	//defining dashboard routes 
	{path: 'dashboard', children: [
		{path: 'home', component: HomeComponent},
		{path: 'task', component: TaskComponent},
		{path: 'todo', component: TodoComponent},
		{path: '', component: HeaderComponent, outlet: 'header'},
		{path: '', component: SidebarComponent, outlet: 'sidebar'},
	]},
	
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})





export class AppRoutingModule { }
