import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { DocrotService } from 'src/app/service/docrot.service';
import { DashbordService } from '../service/dashbord.service';
import { Observable } from 'rxjs/internal/Observable';
import { DoctorDto } from 'src/app/dto/DoctorDto';
import { filter, map, debounceTime } from 'rxjs';
import { PatientService } from 'src/app/service/patient.service';
import { AppointmentDto } from 'src/app/dto/AppointmentDto';
import { PatientDto } from 'src/app/dto/PatientDto';
import { AppointmentService } from 'src/app/service/appointment.service';
import { TechnicianService } from 'src/app/service/technician.service';
import { TechnicianDto } from 'src/app/dto/TechnicianDto';

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
    date:new FormControl('',[Validators.required]),
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
    techniciandate:new FormControl('',[Validators.required]),
    technician:new FormControl('',[Validators.required]),
    technicianpatient:new FormControl('',[Validators.required]),
    technicianDoctor:new FormControl('',[Validators.required]),
    testType:new FormControl('',[Validators.required]),
  })
  get techniciantime (){
    return this.technicianForm.get("techniciantime");
  }
  get techniciandate (){
    return this.technicianForm.get("techniciandate");
  }
  get technician (){
    return this.technicianForm.get("technician");
  }
  get technicianpatient (){
    return this.technicianForm.get("technicianpatient");
  }
  get technicianDoctor (){
    return this.technicianForm.get("technicianDoctor");
  }
  get testType (){
    return this.technicianForm.get("testType");
  }
  technicianDisplayedColumns: string[] = ['technicianId','name', 'contactNumber','patientId','date','time','action'];
  technicianDataSource:any[]=[];

  doctorDto:any[] = new Array;
  patientDto:any[] = new Array;
  technicianDto:any[] = new Array;
  filteredOptions: Observable<DoctorDto[]> | undefined;
  doc_appointment:AppointmentDto = new AppointmentDto;
  doc_appointmentDetails=new Array();
  tech_appointment:AppointmentDto = new AppointmentDto;
  patientDetails: PatientDto = new PatientDto;
  doctorDetails:DoctorDto = new DoctorDto;
  technicianDetails:TechnicianDto = new TechnicianDto;

  times:string[] = ['5.00 PM','5.30 PM','6.00 PM']

  testTypeData: string[] = ['CRP ESR', 'CREATININE', 'ELECTROLYTES', 'FASTING_BLOOD_SUGAR',
  'FASTING_BLOOD_COUNT', 'HBA1C','UREA','LIPID_PROFILE','MICROALBUMIN','TSH','DENGUE_ANTIGEN'];

  constructor(private technicianService:TechnicianService,private docrotService:DocrotService,
    private patientService:PatientService, private appointmentService:AppointmentService){
     
    }
  createTechnicianForm(){
    return new FormGroup({
    techniciantime:new FormControl('',[Validators.required]),
    techniciandate:new FormControl('',[Validators.required]),
    technician:new FormControl('',[Validators.required]),
    technicianpatient:new FormControl('',[Validators.required]),
    technicianDoctor:new FormControl('',[Validators.required]),
    testType:new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
  
    this.getAllDoctors();
    this.getAllPatient();
    this.getAllDocAppointment();
    this.getAllTechnician();
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

  getAllTechnician(){
   this.technicianService.getAll().subscribe(response=>{
      this.technicianDto = response.data;
   })
  }

  applyAppointment(){
    this.doc_appointment.date = this.date?.value as unknown as Date;
    this.doc_appointment.time = this.time?.value as string;
    
    this.patientDetails.id = this.patient?.value as unknown as number;
    this.doctorDetails.id = this.doctor?.value as unknown as number;
    this.doc_appointment.patient = this.patientDetails;
    this.doc_appointment.doctor = this.doctorDetails;

    this.appointmentService.applyAppointment(this.doc_appointment).subscribe(response=>{
          console.log(response)
    });
  }

  getAllDocAppointment(){
    this.appointmentService.getAllAppointment().subscribe(response=>{
        this.doc_appointmentDetails = response.data;
        this.doctorDataSource = this.doc_appointmentDetails;
    });
  }

  creteAppointment(){
    console.log(this.testType?.value)
    this.doc_appointment.testType = this.testType?.value as unknown as string;
    this.doc_appointment.date = this.techniciandate?.value as unknown as Date;
    this.doc_appointment.time = this.techniciantime?.value as unknown as string;
    
    this.patientDetails.id = this.technicianpatient?.value as unknown as number;
    this.doctorDetails.id = this.technicianDoctor?.value as unknown as number;
    this.technicianDetails.id= this.technician?.value  as unknown as number;
    this.technicianDetails.testType = this.testType?.value as unknown as string;

    this.doc_appointment.patient = this.patientDetails;
    this.doc_appointment.doctor = this.doctorDetails;
    this.doc_appointment.technician = this.technicianDetails;

    console.log(this.doc_appointment)

    this.appointmentService.applyTestAppointment(this.doc_appointment).subscribe(response=>{
        console.log(response)
    });
  }
}


