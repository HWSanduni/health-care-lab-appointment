import { Component } from '@angular/core';
import { AppointmentDto } from 'src/app/dto/AppointmentDto';
import { ReportDto } from 'src/app/dto/ReportDto';
import { TechnicianDto } from 'src/app/dto/TechnicianDto';
import { ReportService } from 'src/app/service/report.service';
import { TechnicianService } from 'src/app/service/technician.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent {
  technicianDetails: TechnicianDto = new TechnicianDto;
  reportDto: ReportDto = new ReportDto;
  displayedColumns: string[] = ['docoterName','patientName', 'date', 'time','testType','action'];
  appoitntDetails: AppointmentDto[] = [];
  appointment: AppointmentDto = new AppointmentDto;
  dataSource:any[]=[];
  constructor(private technicianService:TechnicianService,private reportService:ReportService){}



 ngOnInit(): void {
    this.getAllTechnicianDetails();
  }

  getAllTechnicianDetails(){
    this.technicianService.getTechnicianDetails().subscribe(response=>{
      this.technicianDetails =response.data;
      this.appoitntDetails = this.technicianDetails.appointments;
      this.dataSource=this.technicianDetails.appointments;
      console.log(this.technicianDetails.appointments)
    });

  }

  uploadData(event:any,appointment:AppointmentDto){
    const file:File = event.target.files[0];
    const formData = new FormData();
   


    this.reportDto.doctor = appointment.doctor;
    this.reportDto.patient = appointment.patient;
    this.reportDto.technician = appointment.technician;
    formData.append('file', file);
    formData.append('reportDto', JSON.stringify(this.reportDto));
    
    this.reportService.uploadFile(formData).subscribe(response=>{
      console.log(response)
    });

    console.log(this.reportDto)
    // this.patientDetails.id = this.patient?.value as unknown as number;
    // this.doctorDetails.id = this.doctor?.value as unknown as number;
    // this.doc_appointment.patient = this.patientDetails;
    // this.doc_appointment.doctor = this.doctorDetails;
  }


  appointmentFilter(id:any){
   let data = this.appoitntDetails.filter(p => p.id === id);
   
  }
}
