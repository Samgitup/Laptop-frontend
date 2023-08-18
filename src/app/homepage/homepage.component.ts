import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../brand.service';
import { Showroom } from '../showroom';
import { ShowroomService } from '../showroom.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  showrooms!: Showroom[];
  showroomId:any
  location:String='';
  submitted=false;


  constructor(private router:Router,private showroomService:ShowroomService,private brandservice:BrandService ) { 

    this.showroomService.getLocation().subscribe((data: Showroom[]) => {
      this.showrooms = data;
      console.log(this.showrooms);
    });


  }

  ngOnInit(): void {
    // this. getShowrooms()
    
  }

  private getShowrooms(){
    this.showroomService.getShowroomList().subscribe((data: Showroom[]) => {
      this.showrooms = data;
      console.log(this.showrooms);
    });
  }
Admin(){
  this.router.navigate(['/login']);
}

goToBrandList(showroomId:number){
  this.router.navigate([`user-brand`],{queryParams: {showroomId}});
    this.brandservice.setShowroomId(showroomId);
}

goToSerach(){
  this.router.navigate(['serach'])
}





}
