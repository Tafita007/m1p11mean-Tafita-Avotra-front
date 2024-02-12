import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmployeComponent } from './home-employe.component';
import { GestionProfileComponent } from './gestion-profile/gestion-profile.component';
import { RendezvousEmpoyeComponent } from './rendezvous-empoye/rendezvous-empoye.component';
import { SuiviTacheComponent } from './suivi-tache/suivi-tache.component';

const routes: Routes = [
  {
    path: "",
    component: HomeEmployeComponent,
    children: [
      { path: "les-rendez-vous", component: RendezvousEmpoyeComponent },
      { path: "gestion-de-profil", component: GestionProfileComponent },
      { path: "suivi-Tâche", component: SuiviTacheComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeEmployeRoutingModule { }
