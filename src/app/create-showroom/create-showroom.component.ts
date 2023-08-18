import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Showroom } from '../showroom';
import { ShowroomService } from '../showroom.service';
import { throwError } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-create-showroom',
  templateUrl: './create-showroom.component.html',
  styleUrls: ['./create-showroom.component.css']
})
export class CreateShowroomComponent implements OnInit {
  showroom: Showroom = new Showroom();
  submitted:boolean=true;
  constructor(private showroomService: ShowroomService,
    private router: Router) { }



  ngOnInit(): void {
  }


  goToShowroom(){
  this.router.navigate(['/create-showroom']);
  console.log("clicked")
}

  goToShowroomList(){
    this.router.navigate(['/showrooms']);
  }
  saveShowroom(){
    this.showroomService.createShowroom(this.showroom).subscribe( data =>{
      console.log(data);
      this.goToShowroomList();
    },
         error => console.log(error));
  }
 
  onSubmit(){
    console.log(this.showroom);
    this.saveShowroom();
  this.goToShowroomList();
    }
  }


