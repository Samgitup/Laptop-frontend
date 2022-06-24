import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { Showroom } from '../showroom';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {
   brand : Brand = new Brand();
  brandId: any;
  showroom!: Showroom;
  showroomId!: number;
  brandName!: String;
  value!: Brand;
  constructor( private brandService : BrandService,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.brandId = this.route.snapshot.params['brandId'];
    this.brandService.getBrandById(this.brandId).subscribe(data => {
      this.brand = data;
    }, error => console.log(error));
  }
  async onSubmit(){

    console.log(this.brand);
    this.brandService.updateBrand(this.brandId,this.brandName,this.brand).subscribe( data =>{
      this.goToBrandList();
    }
    , error => console.log(error));
   
  }
  


  goToBrandList(){
    this.router.navigate(['/brand-list']);
  }

  
  goToBrands(showroomId:number){
    this.router.navigate(['/brand-list']);
  }

}
