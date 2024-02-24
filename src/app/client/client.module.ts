import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { FooterClientComponent } from './footer-client/footer-client.component';
import { HeaderClientComponent } from './header-client/header-client.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginClientComponent } from './login-client/login-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'
import { JwtHelperService } from '@auth0/angular-jwt';
import {MatBadgeModule} from '@angular/material/badge';
import { DetailDialogComponent } from './list-rdv/detail-dialog/detail-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BasketDialogComponent } from './home/basket-dialog/basket-dialog.component';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    InscriptionComponent,
    HomeComponent,
    LoginClientComponent,
    FooterClientComponent,
    HeaderClientComponent,
    DetailDialogComponent,
    ListRdvComponent,
    BasketDialogComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    ClientRoutingModule,
    RouterModule,
    FormsModule,

    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatBadgeModule,
    MatSelectModule,
  ],
  providers: [
    JwtHelperService,
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class ClientModule { }
