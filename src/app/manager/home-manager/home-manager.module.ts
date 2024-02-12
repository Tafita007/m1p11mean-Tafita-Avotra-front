import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeManagerRoutingModule } from './home-manager-routing.module';
import { HomeManagerComponent } from './home-manager.component';
import { GestionPersonnelComponent } from './gestion-personnel/gestion-personnel.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { HeaderManagerComponent } from './header-manager/header-manager.component';
import { SidebarManagerComponent } from './sidebar-manager/sidebar-manager.component';
import { FooterManagerComponent } from './footer-manager/footer-manager.component';



@NgModule({
  declarations: [
    HomeManagerComponent,
    GestionPersonnelComponent,
    GestionServiceComponent,
    HeaderManagerComponent,
    SidebarManagerComponent,
    FooterManagerComponent,   
  ],
  imports: [
    CommonModule,
    HomeManagerRoutingModule
  ]
})
export class HomeManagerModule { }
