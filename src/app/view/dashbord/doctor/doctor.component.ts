import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterRequestDto } from 'src/app/dto/RegisterRequestDto';
import { DashbordService } from '../service/dashbord.service';
import { DocrotService } from 'src/app/service/docrot.service';
import { DoctorDto } from 'src/app/dto/DoctorDto';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  
   doctorForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    telNumber:new FormControl('',[Validators.required,Validators.pattern("^\\d{9}")]),
    nic:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  registerRequestDto: RegisterRequestDto = new RegisterRequestDto;
  doctorDto=new Array;
  constructor(private dashbordService:DashbordService,private docrotService:DocrotService){}

  get firstname (){
    return this.doctorForm.get("firstname");
  }
  get lastname (){
    return this.doctorForm.get("lastname");
  }
  get contactNumber (){
    return this.doctorForm.get("telNumber");
  }
  get address (){
    return this.doctorForm.get("nic");
  }
  get email (){
    return this.doctorForm.get("email");
  }
  get gender (){
    return this.doctorForm.get("gender");
  }
  get nic (){
    return this.doctorForm.get("nic");
  }
  get userName (){
    return this.doctorForm.get("userName");
  }
  get password (){
    return this.doctorForm.get("password");
  }

  displayedColumns: string[] = ['doctorId','firstname', 'lastname', 'contactNumber', 'nic','action'];
  dataSource:DoctorDto[]=[];


  ngOnInit(): void {
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.docrotService.getAllDoctors().subscribe(response=>{
       this.doctorDto = response.data;
       this.dataSource = this.doctorDto;
    });
  }

  saveDoctor(){
    this.registerRequestDto.firstName = this.firstname?.value as string;
    this.registerRequestDto.lastName = this.lastname?.value as string;
    this.registerRequestDto.telNumber= this.contactNumber?.value as string;
    this.registerRequestDto.address= this.address?.value as string;
    this.registerRequestDto.email= this.email?.value as string;
    this.registerRequestDto.gender= this.gender?.value as string;
    this.registerRequestDto.nic= this.nic?.value as string;
    this.registerRequestDto.userType= 'DOCTOR'
    this.registerRequestDto.userName= this.userName?.value as string;
    this.registerRequestDto.password= this.password?.value as string;
    this.registerRequestDto.createdBy ='ADMIN';

    this.dashbordService.registration(this.registerRequestDto).subscribe(res=>{
       console.log(res);
    });

  }

}
