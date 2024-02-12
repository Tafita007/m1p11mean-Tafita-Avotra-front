import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "salon", pathMatch: "full" },
  { path: "salon", loadChildren: () => import("./client/client.module").then(m => m.ClientModule) },
  { path: "employe", loadChildren: () => import("./employe/employe.module").then(m => m.EmployeModule) },
  { path: "manager", loadChildren: () => import("./manager/manager.module").then(m => m.ManagerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
