import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { LaptopService } from '../laptop.service';
import { Showroom } from '../showroom';
import { ShowroomService } from '../showroom.service';

@Component({
  selector: 'app-user-brand',
  templateUrl: './user-brand.component.html',
  styleUrls: ['./user-brand.component.css']
})
export class UserBrandComponent implements OnInit {
  brands!: Brand[];
  showrooms!:Showroom[];
  showroomId!: any;
  constructor(private router:Router,private showroomService: ShowroomService,private laptopService:LaptopService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.showroomId = this.brandService.showroomId;
    this.getBrands();
    // this.CheckBrands();
  }


  
  getBrands(){
    this.brandService.getBrandsByShowroomId(this.showroomId).subscribe((data: Brand[]) => {
      this.brands = data;
      if(!this.brands?.length){
      
       alert("Brands Not  Available")
       this.router.navigate(['homepage'])
        
      }
      else{
      
        this.brands;
      
      }
      console.log(this.showroomId)
      console.log(this.brands);
    });
  }

  goToLaptopList(brandId: any) {
    this.router.navigate([`user-laptop`], { queryParams: { brandId } });
    this.brandService.setBrandId(brandId);
  }
  goToHomepage(){
    this.router.navigate(['/homepage'])
  }


  goToShowroomList(){
    this.router.navigate([`/homepage`]);
  }
}
