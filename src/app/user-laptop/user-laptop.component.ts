import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-user-laptop',
  templateUrl: './user-laptop.component.html',
  styleUrls: ['./user-laptop.component.css']
})
export class UserLaptopComponent implements OnInit {
laptops!:Laptop[];

getLaptopList: any;
data: any;
brandId: any;
brands!: Brand[];
constructor(private laptopService: LaptopService, private brandService: BrandService,
  private router: Router) { }

ngOnInit(): void {
 
  this.brandId = this.brandService.brandId;
 this.goToLaptopList()

}


goToLaptopList(){
  this.brandService.getLaptopByBrandId(this.brandId).subscribe((data: Laptop[]) => {
    
    this.laptops = data;
    console.log(this.brandId)
    console.log(this.laptops);
  });
}
goToHomepage(){
  this.router.navigate(['/homepage'])
}

}
