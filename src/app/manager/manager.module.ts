import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ManagerComponent,
    LoginManagerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
