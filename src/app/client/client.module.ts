import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { FooterClientComponent } from './footer-client/footer-client.component';
import { HeaderClientComponent } from './header-client/header-client.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginClientComponent } from './login-client/login-client.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InscriptionComponent,
    HomeComponent,
    LoginClientComponent,
    FooterClientComponent,
    HeaderClientComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ClientRoutingModule,
    FormsModule,
  ]
})
export class ClientModule { }
