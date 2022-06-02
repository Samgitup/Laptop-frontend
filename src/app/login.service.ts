import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl="http://localhost:8092/abcd/login";
  log: any;
  constructor(private httpClient:HttpClient) { }

  adminlogin(login:Login):Observable<Object>
  {
    console.log(login);
    return this.httpClient.get(`${this.baseUrl}`,);
  }
}
