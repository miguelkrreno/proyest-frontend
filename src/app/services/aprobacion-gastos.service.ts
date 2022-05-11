import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprobacionGastosService {

  private baseUrl: string = 'https://localhost:44361/api/ExpenseReq'
  private baseUrlValidadores: string = "https://localhost:44361/api/Validator/ExpenseReq";
  private enviarValidador1: string = "https://localhost:44361/api/Validator/FirstValidation"
  private enviarValidador2: string = "https://localhost:44361/api/Validator/SecondValidation"
  private enviarValidador3: string = "https://localhost:44361/api/Validator/ThirdValidation"

  constructor(private httpCliente: HttpClient) { }

  registerExpense(pForm: any): Promise<any> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }

    return lastValueFrom(this.httpCliente.post<any>(this.baseUrl + '/NewExpenseRequest', pForm, /*httpOptions*/));
  }

  obtenerDatosGastos(): Observable<any> {

    var guId = localStorage.getItem("guid");

    return this.httpCliente.get<any>(this.baseUrl + '/' + guId)
  }

  DatosGastosValidadores(): Observable<any> {

    var guId = localStorage.getItem("guid");

    return this.httpCliente.get<any>(this.baseUrlValidadores + '/' + guId)
  }

  enviarSolicitud(pForm: any): Observable<any> {

    var userId = localStorage.getItem("userId");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpCliente.put<any>(this.enviarValidador1 + '/' + userId, pForm, httpOptions)
  }

  enviarSolicitud2(pForm: any): Observable<any> {

    var userId = localStorage.getItem("userId");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpCliente.put<any>(this.enviarValidador2 + '/' + userId, pForm, httpOptions);
  }

  enviarSolicitud3(pForm: any): Observable<any> {

    var userId = localStorage.getItem("userId");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpCliente.put<any>(this.enviarValidador3 + '/' + userId, pForm, httpOptions);
  }




}
