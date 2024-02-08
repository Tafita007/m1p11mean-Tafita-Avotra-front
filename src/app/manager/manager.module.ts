import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { GestionPersonnelComponent } from './gestion-personnel/gestion-personnel.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';


@NgModule({
  declarations: [
    ManagerComponent,
    GestionPersonnelComponent,
    GestionServiceComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
