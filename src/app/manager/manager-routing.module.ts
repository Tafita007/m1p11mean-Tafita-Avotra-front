import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { AuthGuard } from '../Auth/guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: ManagerComponent,
    children: [
      { path: "Login-manager", component: LoginManagerComponent },
      { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./home-manager/home-manager.module').then(m => m.HomeManagerModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
