import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { TechnicianComponent } from './technician/technician.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReportComponent } from './report/report.component';




const routes: Routes = [
  {path:'',component:DashboardComponent,
  children: [
    {path:'appointment',component:AppointmentComponent},
    {path:'doctor',component:DoctorComponent},
   {path:'patient',component:PatientComponent},
   {path:'technician',component:TechnicianComponent},
   {path:'report',component:ReportComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
