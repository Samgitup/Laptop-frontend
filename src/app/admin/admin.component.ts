import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 login:Login=new Login();
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {

  }
  // log(){
  //   console.log(this.log);
  //   this.loginService.slogin(this.login).subscribe(data=>{
  //     alert("SuccessFully Login")
  //   },error=>alert("sorry not login"));
  //   }
  }


