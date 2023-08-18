import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Showroom } from '../showroom';

@Component({
  selector: 'app-user-laptop',
  templateUrl: './user-laptop.component.html',
  styleUrls: ['./user-laptop.component.css']
})
export class UserLaptopComponent implements OnInit {
laptops!:Laptop[];
showrooms!:Showroom[];
getLaptopList: any;
data: any;
brandId: any;
brands!: Brand[];
  showroomId!: number;
constructor(private laptopService: LaptopService, private brandService: BrandService,
  private router: Router) { }

ngOnInit(): void {
 
  this.brandId = this.brandService.brandId;
  this.showroomId = this.brandService.showroomId;
 this.goToLaptopList()

}

goToBrandList(showroomId:number){
      
  this.router.navigate([`user-brand`],{queryParams: {showroomId}});
  this.brandService.setShowroomId(showroomId);
}

goToLaptopList(){
  this.brandService.getLaptopByBrandId(this.brandId).subscribe((data: Laptop[]) => {
    
    this.laptops = data;

    if(!this.laptops?.length){
      alert("Laptops Not  Available")
       this.router.navigate(['user-brand'])
    }else{
      this.laptops;
    }
    console.log(this.brandId)
    console.log(this.laptops);
  });
}
goToHomepage(){
  this.router.navigate(['/homepage'])
}

}
