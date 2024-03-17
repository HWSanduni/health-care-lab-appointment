import { DoctorDto } from "./DoctorDto";
import { PatientDto } from "./PatientDto";
import { TechnicianDto } from "./TechnicianDto";

export class AppointmentDto{
    id!:number;
    testType:string='';
    time!:string;
    date!:Date;
    doctor!:DoctorDto;
    patient!:PatientDto;
    technician!:TechnicianDto;
}