import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private usersUrl: string = "https://localhost:44361/api/User/Profile";
  private validatorsUrl: string = "https://localhost:44361/api/Validator/Profile";


  constructor(private httpClient: HttpClient) { }

  obtenerUsuario(): Observable<any> {

    const id = localStorage.getItem("userId");

    return this.httpClient.get<any>(this.usersUrl + '/' + id)
  }

  obtenerValidador(): Observable<any> {

    const id = localStorage.getItem("userId");

    return this.httpClient.get<any>(this.validatorsUrl + '/' + id);
  }
}
