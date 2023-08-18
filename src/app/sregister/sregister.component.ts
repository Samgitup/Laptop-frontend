import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-sregister',
  templateUrl: './sregister.component.html',
  styleUrls: ['./sregister.component.css']
})
export class SregisterComponent implements OnInit {

  constructor(private adminservice: AdminService,private router:Router) { }
  // private snack:MatSnackBar,

  ngOnInit(): void {
  }

  adminForm=new FormGroup({
    adminName:new FormControl('',[Validators.required]),
    adminEmail:new FormControl('',[Validators.required, Validators.minLength(1)]),
    adminAge:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])

  })

  get adminName(){
    return this.adminForm.get('adminName');
  }

  get adminEmail(){
    return this.adminForm.get('adminEmail');
  }

  get adminAge(){
    return this.adminForm.get('adminAge');
  }
  get password(){
    return this.adminForm.get('password')
  }
  goToLogOut(){
    this.router.navigate(['slogin'])
  }

  public onSubmit(){
    this.adminservice.addAdmin(this.adminForm.value).subscribe(

      (data)=>{
        console.log(data)
        //console.log(this.adminForm.value)
        alert("Signed up")
        this.router.navigate(["/slogin"]);
      },(error)=>{
        console.log(error);
        alert("check all fields unable to Register")
        
      }

    )
   
  }


}


