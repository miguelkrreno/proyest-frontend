import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RequestUnic } from '../interfaces/requestUnic';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "https://localhost:44361/api/User";


  constructor(private httpClient: HttpClient) { }

  getAllRequest(): Promise<RequestUnic[]> {

    let id = localStorage.getItem("userId");

    return lastValueFrom(this.httpClient.get<RequestUnic[]>(this.baseUrl + '/AllRequests/' + id))

  }
}
