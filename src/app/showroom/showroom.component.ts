import { Component, OnInit } from '@angular/core';
import { Showroom } from '../showroom';
import { Router } from '@angular/router';
import { ShowroomService } from '../showroom.service';
import { BrandService } from '../brand.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {
  showrooms!: Showroom[];
  constructor(private showroomService: ShowroomService,private brandservice: BrandService,
  private cookies:CookieService,private router: Router) { }
    showroomId: any;
  ngOnInit(): void { 
    this.getShowrooms();
  }


  goToShowroom(){
    this.router.navigate(['/create-showroom']);
    console.log("clicked")
  }
  private getShowrooms(){
    this.showroomService.getShowroomList().subscribe((data: Showroom[]) => {
      this.showrooms = data;
      console.log(this.showrooms);
    });
  }

  goToShowroomList(){
    this.router.navigate(['/showrooms']);
  }



  showroomDetails(showroomId: number){
    this.router.navigate([`delete-showroom/${showroomId}`]);
  }
  updateShowroom(showroomId: number){
    this.router.navigate([`update-showroom/${showroomId}`]);
  }
  
  goToHomepage(){
    this.router.navigate(['/homepage'])
  }

  goToBrandList(showroomId:number){
      
    this.router.navigate([`brand-list`],{queryParams: {showroomId}});
    this.brandservice.setShowroomId(showroomId);
  }


  onSelect(value:any,showroomId: number){
    if(value==="laptop"){    
      this.router.navigate([`laptop-list`]);
    }else {
      
      this.router.navigate([`brand-list`],{queryParams: {showroomId}});
      this.brandservice.setShowroomId(showroomId);
    }
  }
  deleteShowroom(showroomId: number){
    this.showroomService.deleteShowroom(showroomId).subscribe( data => {
      console.log(data)
      
    })
    this.ngOnInit();
  }
  createShowroom(showroom:Showroom){
    this.router.navigate([`create-showroom`]);
  }

  onLogOut(){
    this.cookies.delete('jwt_token');
   
    this.router.navigate(['/serach'])
    
  }

}
