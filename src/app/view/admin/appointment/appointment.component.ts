import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  doctorForm=new FormGroup({
    time:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required,Validators.pattern("^\\d{9}")]),
    doctor:new FormControl('',[Validators.required]),
    patient:new FormControl('',[Validators.required]),
  })
  get time (){
    return this.doctorForm.get("time");
  }
  get date (){
    return this.doctorForm.get("date");
  }
  get doctor (){
    return this.doctorForm.get("doctor");
  }
  get patient (){
    return this.doctorForm.get("patient");
  }
 

  doctorDisplayedColumns: string[] = ['doctorId','name', 'contactNumber','patientId','date','time','action'];
  doctorDataSource:any[]=[];
  technicianForm=new FormGroup({
    techniciantime:new FormControl('',[Validators.required]),
    techniciandate:new FormControl('',[Validators.required,Validators.pattern("^\\d{9}")]),
    technician:new FormControl('',[Validators.required]),
    technicianpatient:new FormControl('',[Validators.required]),
  })
  get techniciantime (){
    return this.doctorForm.get("techniciantime");
  }
  get techniciandate (){
    return this.doctorForm.get("techniciandate");
  }
  get technician (){
    return this.doctorForm.get("technician");
  }
  get technicianpatient (){
    return this.doctorForm.get("technicianpatient");
  }
  technicianDisplayedColumns: string[] = ['technicianId','name', 'contactNumber','patientId','date','time','action'];
  technicianDataSource:any[]=[];
}
