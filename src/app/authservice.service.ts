import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private baseUrl = 'http://localhost:8092/abcd/admin';
  constructor(private http:HttpClient) { }

  generateToken(request:any){
    return this.http.post<any>(`${this.baseUrl}/authenicate`,request,{responseType:'text' as 'json'})
  }

  welcome(token :string){
    let tokenStr ='Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization',tokenStr);
    return this.http.get<string>("http://localhost:8092/abcd/",{headers,responseType:'text' as 'json'});
  }
}
