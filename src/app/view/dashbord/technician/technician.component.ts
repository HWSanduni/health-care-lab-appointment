import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterRequestDto } from 'src/app/dto/RegisterRequestDto';
import { DashbordService } from '../service/dashbord.service';
import { TechnicianService } from 'src/app/service/technician.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent {
  technicianForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    telNumber:new FormControl('',[Validators.required,Validators.pattern("^\\d{9}")]),
    email:new FormControl('',[Validators.required]),
    testtype:new FormControl('',[Validators.required]),
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  registerRequestDto: RegisterRequestDto = new RegisterRequestDto;
  technicianDto=new Array();
  constructor(private dashbordService:DashbordService,private technicianService:TechnicianService){}
  get firstname (){
    return this.technicianForm.get("firstname");
  }
  get lastname (){
    return this.technicianForm.get("lastname");
  }
  get contactNumber (){
    return this.technicianForm.get("telNumber");
  }
  get email (){
    return this.technicianForm.get("email");
  }
  get testtype (){
    return this.technicianForm.get("testtype");
  }
  get userName (){
    return this.technicianForm.get("userName");
  }
  get password (){
    return this.technicianForm.get("password");
  }
  testType: string[] = ['CRP ESR', 'CREATININE', 'ELECTROLYTES', 'FASTING_BLOOD_SUGAR',
   'FASTING_BLOOD_COUNT', 'HBA1C','UREA','LIPID_PROFILE','MICROALBUMIN','TSH','DENGUE_ANTIGEN'];
  displayedColumns: string[] = ['technicianId','firstname', 'lastname', 'contactNumber', 'testtype','action'];
  dataSource:any[]=[];

  ngOnInit(): void {
    this.getAllTechnician();
  }
  getAllTechnician() {
   this.technicianService.getAll().subscribe(response=>{
    this.technicianDto = response.data;
    this.dataSource = this.technicianDto;
   });
  }

  saveTechnician(){
    this.registerRequestDto.firstName = this.firstname?.value as string;
    this.registerRequestDto.lastName = this.lastname?.value as string;
    this.registerRequestDto.telNumber= this.contactNumber?.value as string;
    this.registerRequestDto.email= this.email?.value as string;
    this.registerRequestDto.testType=this.testtype?.value as string;
    this.registerRequestDto.userType= 'TECHNICIAN'
    this.registerRequestDto.userName= this.userName?.value as string;
    this.registerRequestDto.password= this.password?.value as string;
    this.registerRequestDto.createdBy ='ADMIN';

    this.dashbordService.registration(this.registerRequestDto).subscribe(res=>{
       console.log(res);
    });
  }

}
