import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginEmployeComponent } from '../employe/login-employe/login-employe.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      { path: "services", component: HomeComponent },
      { path: "inscription", component: InscriptionComponent },
      { path: "login", component: LoginClientComponent },
      { path: "list-rdv", component: ListRdvComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
