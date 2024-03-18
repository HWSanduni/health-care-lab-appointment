import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportDto } from '../dto/ReportDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
   headers = this.setAuthenticateHeaders() || new HttpHeaders();
  baseUrl="http://localhost:8080/health-care-lab-appointment/v1/report/";
  constructor(private http: HttpClient) {
   }

   

  // upload(file : any, userName : any): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //   const req = new HttpRequest('POST', `${this.baseUrl}/`+ 'save-report' , formData, {
  //     reportProgress: true,
  //     responseType: 'json',
  //     headers: this.setAuthenticateHeaders()
  //   });
  //   return this.http.request(req);
  // }

  uploadFile(file:FormData){
    return this.http.post(this.baseUrl + "save-report",file,this.setAuthenticateHeaders());
  }

  
  getToken() {
    return localStorage.getItem("token");
  }
  setAuthenticateHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        responseType: 'json',
        'Authorization': 'Bearer ' + this.getToken(),
      })
    };

    return httpOptions;
  }
}
