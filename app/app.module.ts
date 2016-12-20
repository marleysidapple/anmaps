import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app.routing";

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HomeComponent } from './module/home/home.component';
import { TaskComponent } from './module/task/task.component';
import { TodoComponent } from './module/todo/todo.component';


import { TodoService } from './module/todo/todo.service';



@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent, HomeComponent, TaskComponent, TodoComponent],
  providers: 	[ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
