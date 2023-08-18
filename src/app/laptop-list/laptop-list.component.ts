import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Showroom } from '../showroom';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  showrooms!:Showroom[];
  laptops!: Laptop[];
  getLaptopList: any;
  data: any;
  brandId!: number;
  brands!: Brand[];
  showroomId!: number;
  constructor(private laptopService: LaptopService, private brandService: BrandService,
    private router: Router) { }

  ngOnInit(): void {
    // this.LaptopList();
    this.showroomId=this.brandService.showroomId;
    this.brandId = this.brandService.brandId;

    this.getLaptopByBrandId();
     console.log(this.brandId,"passing in laptop list")
  }
  goToHomepage(){
    this.router.navigate(['/showrooms'])
  }

/////////////////////////////////////////////
  goToBack(){
    this.router.navigate(['/brand-list'])
  }

  goToBrandList(showroomId:number){
      
    this.router.navigate([`brand-list`],{queryParams: {showroomId}});
    this.brandService.setShowroomId(showroomId);
  }
/////////////////////////////////////////////
  goToLaptop(){
    this.router.navigate(['/create-laptop']);
  }
  private LaptopList() {
    this.laptopService.getLaptopList().subscribe((data: Laptop[]) => {
      this.laptops = data;
      console.log(this.laptops);
    });
  
  }
private getLaptopByBrandId(){
  this.brandService.getLaptopByBrandId(this.brandId).subscribe((data: Laptop[]) => {
    
    this.laptops = data;
    console.log(this.brandId)
    console.log(this.laptops);
  });
}


  laptopDetails(laptopId: number) {
    this.router.navigate([`laptop-details/${laptopId}`]);
  }
  updatelaptop(laptopId: number) {
    this.router.navigate([`update-laptop/${laptopId}`]);
    this.brandService.setLaptopId(laptopId);

  }
  deletelaptop(laptopId: number) {
    this.laptopService.deletelaptop(laptopId).subscribe((data: any) => {
      console.log(data)

    })
    this.ngOnInit();
  }

 

}


