import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication-service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

   username1!: string;
    password !: string;
    errorMessage = 'Invalid Credentials';
    successMessage!: string;
    invalidLogin = false;
    loginSuccess = false;
  username: any;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService) {   }
  
    ngOnInit() {
    }
  
    handleLogin() {
      this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        this.router.navigate(['/hello-world']);
      }, () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });      
    }

}
