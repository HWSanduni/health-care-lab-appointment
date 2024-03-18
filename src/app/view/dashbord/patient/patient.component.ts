import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterRequestDto } from 'src/app/dto/RegisterRequestDto';
import { DashbordService } from '../service/dashbord.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patientForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    telNumber:new FormControl('',[Validators.required,Validators.pattern("^\\d{9}")]),
    nic:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  registerRequestDto: RegisterRequestDto = new RegisterRequestDto;
  patientDto=new Array();

  constructor(private dashbordService:DashbordService,private patientService:PatientService){}

  get firstname (){
    return this.patientForm.get("firstname");
  }
  get lastname (){
    return this.patientForm.get("lastname");
  }
  get contactNumber (){
    return this.patientForm.get("telNumber");
  }
  get address (){
    return this.patientForm.get("nic");
  }
  get email (){
    return this.patientForm.get("email");
  }
  get gender (){
    return this.patientForm.get("gender");
  }
  get age (){
    return this.patientForm.get("age");
  }
  get nic (){
    return this.patientForm.get("nic");
  }
  get userName (){
    return this.patientForm.get("userName");
  }
  get password (){
    return this.patientForm.get("password");
  }

  displayedColumns: string[] = ['patientId','firstname', 'lastname', 'contactNumber', 'nic','action'];
  dataSource:any[]=[];

  ngOnInit(): void {
    this.getAllPatient();
  }
  getAllPatient() {
    this.patientService.getAllDoctors().subscribe(response=>{
        this.patientDto = response.data;
        this.dataSource = this.patientDto;
    });
  }
  savePatient(){
    this.registerRequestDto.firstName = this.firstname?.value as string;
    this.registerRequestDto.lastName = this.lastname?.value as string;
    this.registerRequestDto.telNumber= this.contactNumber?.value as string;
    this.registerRequestDto.address= this.address?.value as string;
    this.registerRequestDto.email= this.email?.value as string;
    this.registerRequestDto.gender= this.gender?.value as string;
    this.registerRequestDto.nic= this.nic?.value as string;
    this.registerRequestDto.age=this.age?.value as string;
    this.registerRequestDto.userType= 'PATIENT'
    this.registerRequestDto.userName= this.userName?.value as string;
    this.registerRequestDto.password= this.password?.value as string;
    this.registerRequestDto.createdBy ='ADMIN';

    this.dashbordService.registration(this.registerRequestDto).subscribe(res=>{
       console.log(res);
    });
  }
}
