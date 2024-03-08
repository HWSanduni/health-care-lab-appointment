import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    gender:new FormControl('',[Validators.required])
  })

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

  displayedColumns: string[] = ['firstname', 'lastname', 'contactNumber', 'nic','action'];
  dataSource:any[]=[];
}
