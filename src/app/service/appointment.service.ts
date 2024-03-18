import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDto } from '../dto/AppointmentDto';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl="http://localhost:8080/health-care-lab-appointment/v1/";
  constructor(private http: HttpClient) { }

  headersObject = new HttpHeaders();
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
    "Access-Control-Allow-Headers":"Authorization, Content-Type, enctype",
});

  applyAppointment(appointment:AppointmentDto):Observable<any>{
    return this.http.post(this.baseUrl + "doc-appointment/save-appointment",appointment,this.setAuthenticateHeaders());
  }
  applyTestAppointment(appointment:AppointmentDto):Observable<any>{
    return this.http.post(this.baseUrl + "tech-appointment/save-appointment",appointment,this.setAuthenticateHeaders());
  }
  getAllAppointment ():Observable<any>{
    return this.http.get(this.baseUrl + "doc-appointment/get-all-Appointment",this.setAuthenticateHeaders());
  }


  getToken() {
    return localStorage.getItem("token");
  }

  setAuthenticateHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.getToken(),
        'Content-Type': 'application/json'
      })
    };

    return httpOptions;
  }
}
