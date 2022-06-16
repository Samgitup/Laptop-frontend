import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops!: Laptop[];
  getLaptopList: any;
  data: any;
  brandId: any;
  brands!: Brand[];
  constructor(private laptopService: LaptopService, private brandService: BrandService,
    private router: Router) { }

  ngOnInit(): void {
    this.LaptopList();
    this.brandId = this.brandService.brandId;
    //  console.log(this.brandId,"????????????????????")
  }

  goToLaptop(){
    this.router.navigate(['/create-laptop']);
  }
  private LaptopList() {
    this.laptopService.getLaptopList().subscribe((data: Laptop[]) => {
      this.laptops = data;
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


