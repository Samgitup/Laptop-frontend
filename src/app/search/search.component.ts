import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BrandService } from '../brand.service';
import { ShowroomService } from '../showroom.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  location:String='';
  submitted:boolean=true;


  constructor(private router:Router,private showroomService:ShowroomService,private brandservice:BrandService ) { }


  ngOnInit(): void {
  }
  validateTheResult(data:any){
    if(data.length<=0){
      this.submitted=false
      
    }else{
      this.submitted=true
      this.showroomService.setLocation(data)
      this.gotoList();
    }
  }
  onSubmit(){
    this.showroomService.getShowroomByLocation(this.location).subscribe(
      {
        next:(data:any)=>{
          
          this.validateTheResult(data)
          }
        }
    )
  }
  
  gotoList() {

      this.router.navigate(['homepage']);
    
  }

  goToSerach(): void{
    window.location.reload();
  
    
  }
}
