import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    InscriptionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
