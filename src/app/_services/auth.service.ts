import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        //redirect to login
        this.router.navigate(['/login']);
    }
  }
  canAuthenticate(){
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/showrooms']);
    }
  }

  register(name:string,email:string,password:string){
   
     return this.http
      .post<{idToken:string}>(
        'http://localhost:8092/abcd/login/login',
          {displayName:name,email,password}
      );
  }

  storeToken(token:string){
      sessionStorage.setItem('token',token);
  }

  login(email:string,password:string){
      return this.http
      .post<{idToken:string}>(
          'http://localhost:8092/abcd/login/register',
            {email,password}
      );
  }

  detail(){
    let token = sessionStorage.getItem('token');

    return this.http.post<{users:Array<{localId:string,displayName:string}>}>(
        'http://localhost:8092/abcd/login',
        {idToken:token}
    );
  }

  removeToken(){
    sessionStorage.removeItem('token');
  }



}
