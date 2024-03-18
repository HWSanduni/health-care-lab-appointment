import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicianRoutingModule } from './technician-routing.module';
import { TechnicianComponent } from './technician.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentModule } from 'src/app/mat-component.module';
import { AppointmentService } from 'src/app/service/appointment.service';
import { TechnicianService } from 'src/app/service/technician.service';
import { ReportService } from 'src/app/service/report.service';



@NgModule({
  declarations: [
    TechnicianComponent,
    
  ],
  imports: [
    CommonModule,
    TechnicianRoutingModule,
    MatComponentModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[AppointmentService,TechnicianService,ReportService]
})
export class TechnicianModule { }
