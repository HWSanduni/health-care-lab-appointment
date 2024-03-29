import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/login/login.module').then((m)=> m.LoginModule)
  },
  {
    path: 'dashbaord',
    loadChildren: () =>
      import('./view/dashbord/dashboard.module').then((m)=> m.DashboardModule)
  },
  {
    path: 'technician',
    loadChildren: () =>
      import('./view/technician/technician.module').then((m)=> m.TechnicianModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
