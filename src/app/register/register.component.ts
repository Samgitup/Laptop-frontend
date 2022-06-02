import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register  = new Register();//1
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

reg(){
  console.log(this.register);
  
  this.registerService.sregister(this.register).subscribe(data=>{
alert("SuccessFully Registered ?")
  },error=>alert("sorry not  Registered"));
}


}
