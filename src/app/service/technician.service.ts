import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  baseUrl="http://localhost:8080/health-care-lab-appointment/v1/technician/";
  constructor(private http: HttpClient) { }

  headersObject = new HttpHeaders();
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
    "Access-Control-Allow-Headers":"Authorization, Content-Type, enctype",
});

  getAll():Observable<any>{
    return this.http.get(this.baseUrl + "get-all-technician",this.setAuthenticateHeaders());
  }


  getToken() {
    return localStorage.getItem("token");
  }

  setAuthenticateHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.getToken(),
      })
    };

    return httpOptions;
  }
}
