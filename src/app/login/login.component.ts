import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:Login=new Login();
  constructor(private loginService: LoginService,private router :Router) { }

  ngOnInit(): void {
  }
log(){
  console.log(this.login);
  this.loginService.adminlogin(this.login).subscribe(data=>{
    alert("SuccessFully  Admin login")
  },error=>alert("not login "));
  

}
}
