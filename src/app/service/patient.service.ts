import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl="http://localhost:8080/health-care-lab-appointment/v1/patient/";
  constructor(private http: HttpClient) { }

  headersObject = new HttpHeaders();
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
    "Access-Control-Allow-Headers":"Authorization, Content-Type, enctype",
});

  getAllDoctors():Observable<any>{
    return this.http.get(this.baseUrl + "get-all-patient",this.setAuthenticateHeaders());
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
