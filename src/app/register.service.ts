import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
baseUrl="http://localhost:8092/abcd/login/login";
  constructor(private httpClient:HttpClient) { }


  sregister(register:Register):Observable<Object>{
console.log(register);
return this.httpClient.post(`${this.baseUrl}`,register);
  }
  
  // sregister(login:object):Observable<Object>{
  //   console.log(login);
  //   return this.httpClient.post(`${this.baseUrl}`,login);
  //     }
}
