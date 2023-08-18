import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands!: Brand[];
  // router: any;
  getBrandList: any;
  showroomId!: number;
  getShowroomId!: number;
  showroom: any;
  brand!: Brand;
  // brandId!: number;



  constructor(private brandService: BrandService,
    private router: Router) { }

  ngOnInit(): void {
    this.showroomId = this.brandService.showroomId;
    this.getBrands();
  }

  goToBrand() {
    this.router.navigate(['/create-brand']);
    console.log("CreateBrand")
  }
  goToBrandList() {
    this.router.navigate(['/brands']);
  }
  goToHomepage(){
    this.router.navigate(['/showrooms'])
  }

  goToShowroomList(){
    this.router.navigate([`showrooms`]);
  }

  private getBrands() {

    this.brandService.getBrandsByShowroomId(this.showroomId).subscribe((data: Brand[]) => {
      this.brands = data;
      console.log(this.showroomId)
      console.log(this.brands);
    });
  }
  brandDetails(brandId: number) {
    this.router.navigate([`brand-details/${brandId}`]);
  }
  updateBrand(brand: number) {
    this.router.navigate([`update-brand/${brand}`]);
  }
  deleteBrand(brandId: number) {
    this.brandService.deleteBrand(brandId).subscribe((data: any) => {
      console.log(data)

    })
    this.ngOnInit();
  }
  createbrand(brand: Brand) {
    console.log(this.showroomId)
    this.router.navigate([`create-brand/${this.showroomId}`]);
  }
  setShowroomId() {
    this.brandService.setShowroomId(this.showroomId);
  }
   
  goToLaptopList(brandId: any) {
    this.router.navigate([`laptop-list`], { queryParams: { brandId } });
    this.brandService.setBrandId(brandId);
  }
}


