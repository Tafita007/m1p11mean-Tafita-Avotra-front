import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeManagerComponent } from './home-manager.component';
import { GestionPersonnelComponent } from './gestion-personnel/gestion-personnel.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';

const routes: Routes = [
  {
    path: "",
    component: HomeManagerComponent,
    children: [
      { path: "gestion-du-personnel", component: GestionPersonnelComponent },
      { path: "gestion-des-services", component: GestionServiceComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeManagerRoutingModule { }
