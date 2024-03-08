import { PatientDto } from "./PatientDto";

export class DoctorDto{
    id:number=0;
    appointmentType:string='';
    time:string='';
    date!:Date;
    doctor!:DoctorDto;
    patient!:PatientDto;
}