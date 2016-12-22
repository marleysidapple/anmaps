import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app.routing";

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AuthComponent } from './module/auth/auth.component';
import { HomeComponent } from './module/home/home.component';
import { TaskComponent } from './module/task/task.component';
import { TodoComponent } from './module/todo/todo.component';


import { TodoService } from './module/todo/todo.service';
import { AuthService } from './module/auth/auth.service';



@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent, HomeComponent, TaskComponent, TodoComponent, AuthComponent],
  providers: 	[ TodoService, AuthService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
