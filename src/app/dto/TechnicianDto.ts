import { AppointmentDto } from "./AppointmentDto";

export class TechnicianDto{
    id!:number;
    technicianId:string='';
    name:string='';
    telNumber:string='';
    address:string='';
    nic:string='';
    email:string='';
    testType:string='';
    appointments!:AppointmentDto [];
}