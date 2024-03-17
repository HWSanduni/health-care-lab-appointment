import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatComponentModule } from 'src/app/mat-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReportComponent } from './report/report.component';
import { DashbordService } from './service/dashbord.service';
import { HttpClientModule } from '@angular/common/http';
import { TechnicianComponent } from './technician/technician.component';
import { DocrotService } from 'src/app/service/docrot.service';
import { AppointmentService } from 'src/app/service/appointment.service';
import { TechnicianService } from 'src/app/service/technician.service';
import { ReportService } from 'src/app/service/report.service';
import { PatientService } from 'src/app/service/patient.service';



@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentComponent,
    PatientComponent,
    ReportComponent,
    TechnicianComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatComponentModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[DashbordService,DocrotService,PatientService,AppointmentService,TechnicianService,ReportService,AppointmentService]
})
export class DashboardModule { }
