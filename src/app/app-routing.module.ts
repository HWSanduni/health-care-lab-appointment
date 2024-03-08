import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./view/admin/dashbord.module').then((m) => m.DashbordModule),
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./view/doctor/doctor.module').then((m) => m.DoctorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
