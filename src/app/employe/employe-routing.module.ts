import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe.component';
import { LoginEmployeComponent } from './login-employe/login-employe.component';

const routes: Routes = [
  {
    path: "",
    component: EmployeComponent,
    children: [
      { path: "Login-employe", component: LoginEmployeComponent },
      { path: 'home', loadChildren: () => import('./home-employe/home-employe.module').then(m => m.HomeEmployeModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
