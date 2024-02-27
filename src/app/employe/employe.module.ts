import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeComponent } from './employe.component';
import { LoginEmployeComponent } from './login-employe/login-employe.component';
import { HomeEmployeComponent } from './home-employe/home-employe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeComponent,
    LoginEmployeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    EmployeRoutingModule
  ]
})
export class EmployeModule { }
