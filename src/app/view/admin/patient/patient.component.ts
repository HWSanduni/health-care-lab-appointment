import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    age:new FormControl('',[Validators.required])
  })

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

  displayedColumns: string[] = ['firstname', 'lastname', 'contactNumber', 'nic','action'];
  dataSource:any[]=[];
}
