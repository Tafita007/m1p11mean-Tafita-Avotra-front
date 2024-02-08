import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeComponent } from './employe.component';
import { RendezvousEmpoyeComponent } from './rendezvous-empoye/rendezvous-empoye.component';
import { GestionProfileComponent } from './gestion-profile/gestion-profile.component';
import { SuiviTacheComponent } from './suivi-tache/suivi-tache.component';


@NgModule({
  declarations: [
    EmployeComponent,
    RendezvousEmpoyeComponent,
    GestionProfileComponent,
    SuiviTacheComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule
  ]
})
export class EmployeModule { }
