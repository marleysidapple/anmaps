import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './module/home/home.component';
import { TaskComponent } from './module/task/task.component';
import { TodoComponent } from './module/todo/todo.component';



const routes:Routes = [
	//defining default route
	{path: '', pathMatch: 'full', redirectTo: 'home'},
	{path: 'home', component: HomeComponent},
	{path: 'task', component: TaskComponent},
	{path: 'todo', component: TodoComponent},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
