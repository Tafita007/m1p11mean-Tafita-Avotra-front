import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { FooterClientComponent } from './footer-client/footer-client.component';
import { HeaderClientComponent } from './header-client/header-client.component';


@NgModule({
  declarations: [
    InscriptionComponent,
    HomeComponent,
    FooterClientComponent,
    HeaderClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
