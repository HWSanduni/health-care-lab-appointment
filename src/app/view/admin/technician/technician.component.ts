import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    testtype:new FormControl('',[Validators.required])
  })

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
  get gender (){
    return this.technicianForm.get("testtype");
  }

  displayedColumns: string[] = ['firstname', 'lastname', 'contactNumber', 'testtype','action'];
  dataSource:any[]=[];
}
