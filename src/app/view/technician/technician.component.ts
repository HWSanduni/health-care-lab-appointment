import { Component } from '@angular/core';
import { TechnicianService } from 'src/app/service/technician.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent {
  displayedColumns: string[] = ['docoterName','patientName', 'date', 'time','action'];
  dataSource:any[]=[];
  constructor(private technicianService:TechnicianService){}



 ngOnInit(): void {
    this.getAllTechnicianDetails();
  }

  getAllTechnicianDetails(){
    this.technicianService.getTechnicianDetails().subscribe(response=>{

      console.log(response)
    });

  }

}
