import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEmployeRoutingModule } from './home-employe-routing.module';
import { HomeEmployeComponent } from './home-employe.component';
import { RendezvousEmpoyeComponent } from './rendezvous-empoye/rendezvous-empoye.component';
import { GestionProfileComponent } from './gestion-profile/gestion-profile.component';
import { SuiviTacheComponent } from './suivi-tache/suivi-tache.component';
import { HeaderEmployeComponent } from './header-employe/header-employe.component';
import { SidebarEmployeComponent } from './sidebar-employe/sidebar-employe.component';
import { FooterEmployeComponent } from './footer-employe/footer-employe.component';


@NgModule({
  declarations: [
    HomeEmployeComponent,
    RendezvousEmpoyeComponent,
    GestionProfileComponent,
    SuiviTacheComponent,
    HeaderEmployeComponent,
    SidebarEmployeComponent,
    FooterEmployeComponent,
  ],
  imports: [
    CommonModule,
    HomeEmployeRoutingModule
  ]
})
export class HomeEmployeModule { }
