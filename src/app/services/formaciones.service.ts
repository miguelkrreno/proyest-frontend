import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormacionesService {

  private baseUrl: string = "https://localhost:44361/api/Training";
  private baseUrlValidadores: string = "https://localhost:44361/api/Validator/TrainingReq";
  private enviarValidador1: string = "https://localhost:44361/api/Validator/FirstValidation"
  private enviarValidador2: string = "https://localhost:44361/api/Validator/SecondValidation"
  private enviarValidador3: string = "https://localhost:44361/api/Validator/ThirdValidation"


  constructor(private httpClient: HttpClient) { }

  registerFormacion(pForm: any): Observable<any> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }

    return this.httpClient.post<any>(this.baseUrl + '/NewTrainingRequest', pForm/*, httpOptions*/)
  }

  obtenerDatosFormacion(): Observable<any> {

    var guId = localStorage.getItem("guid");

    return this.httpClient.get<any>(this.baseUrl + '/' + guId)
  }


  DatosFormacionValidadores(): Observable<any> {

    var guId = localStorage.getItem("guid");

    return this.httpClient.get<any>(this.baseUrlValidadores + '/' + guId)
  }

  enviarSolicitud(pForm: any): Observable<any> {

    var userId = localStorage.getItem("userId");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.put<any>(this.enviarValidador1 + '/' + userId, pForm, httpOptions)
  }

  enviarSolicitud2(pForm: any): Observable<any> {

    var userId = localStorage.getItem("userId");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.put<any>(this.enviarValidador2 + '/' + userId, pForm, httpOptions);
  }

  enviarSolicitud3(pForm: any): Observable<any> {

    var userId = localStorage.getItem("userId");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.put<any>(this.enviarValidador3 + '/' + userId, pForm, httpOptions);
  }
}
