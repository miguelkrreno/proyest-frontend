import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = "https://localhost:44361/api/User";

  constructor(private httpClient: HttpClient) { }

  registerUsuario(pForm: any): Observable<any> {
    console.log(pForm);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.post<any>(this.baseUrl + '/Login', pForm, httpOptions)
  }
}
