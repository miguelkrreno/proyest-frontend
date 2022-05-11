import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private baseUrl: string = 'https://localhost:44361/api/PurchaseReq'
  private baseUrlValidadores: string = "https://localhost:44361/api/Validator/PurchaseReq";
  private enviarValidador1: string = "https://localhost:44361/api/Validator/FirstValidation"
  private enviarValidador2: string = "https://localhost:44361/api/Validator/SecondValidation"
  private enviarValidador3: string = "https://localhost:44361/api/Validator/ThirdValidation"

  constructor(private httpCliente: HttpClient) { }

  registerPurchase(pForm: any): Promise<any> {
    return lastValueFrom(this.httpCliente.post<any>(this.baseUrl + '/NewTPurchaseRequest', pForm));

  }

  obtenerDatosCompra(): Observable<any> {

    var guId = localStorage.getItem("guid");

    return this.httpCliente.get<any>(this.baseUrl + '/' + guId)
  }

  DatosComprasValidadores(): Observable<any> {

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
