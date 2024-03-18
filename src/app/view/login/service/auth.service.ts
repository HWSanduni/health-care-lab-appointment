import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginDto } from 'src/app/dto/LoginDto';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseUrl="http://localhost:8080/health-care-lab-appointment/v1/authentication/";
  constructor(private http: HttpClient) { }

   headersObject = new HttpHeaders();
    headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":"Authorization, Content-Type, enctype",
  });


  login(loginDto: LoginDto): Observable<any> {
    return this.http.post(this.baseUrl + "login", loginDto);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setAuthenticateHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getToken(),
      })
    };

    return httpOptions;
  }
}
