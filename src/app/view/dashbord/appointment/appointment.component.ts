import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { DocrotService } from 'src/app/service/docrot.service';
import { DashbordService } from '../service/dashbord.service';
import { Observable } from 'rxjs/internal/Observable';
import { DoctorDto } from 'src/app/dto/DoctorDto';
import { filter, map, debounceTime } from 'rxjs';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  step = 0;
  myControl: any;

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

  doctorDto:any[] = new Array;
  patientDto:any[] = new Array;
  filteredOptions: Observable<DoctorDto[]> | undefined;

  times:string[] = ['5.00 PM','5.30 PM','6.00 PM']

  constructor(private dashbordService:DashbordService,private docrotService:DocrotService,
    private patientService:PatientService){}

  ngOnInit(): void {
  
    this.getAllDoctors();
    this.getAllPatient();
  }

  getAllDoctors() {
    this.docrotService.getAllDoctors().subscribe(response=>{
       this.doctorDto = response.data;
    });
  }
  getAllPatient() {
    this.patientService.getAllDoctors().subscribe(response=>{
        this.patientDto = response.data;
    });
  }
}


