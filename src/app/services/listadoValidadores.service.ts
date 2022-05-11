import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { listaSolicitudes } from '../interfaces/listaSolicitudes';

@Injectable({
  providedIn: 'root'
})
export class ListadoValidadoresService {

  private baseUrl: string = "https://localhost:44361/api/Validator/AllRequests";

  constructor(private httpClient: HttpClient) {

  }


  verSolicitudes(): Observable<listaSolicitudes[]> {

    var id = localStorage.getItem("userId");

    return this.httpClient.get<listaSolicitudes[]>(this.baseUrl + '/' + id);
  }



}
