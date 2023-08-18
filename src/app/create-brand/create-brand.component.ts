import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { Showroom } from '../showroom';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {
brand : Brand= new Brand();
brandName!: String;
  brandId:number=0;
  showroomId!: number;
  body: any;
  submitted:boolean=true;
  constructor(private brandService:BrandService,
    private router:Router) { }

  ngOnInit(): void {
  }
goToBrand(){
  this.router.navigate(['/create-brand']);
  console.log("Start")
}

goToBrandList(){
  this.router.navigate(['/brand-list'])
}

saveBrand(){
  
 const newBrand = {
  "brandName": this.brand.brandName,
  "showroom": {  
    "showroomId": this.brandService.getShowroomId()
  }
}
console.log(newBrand)
  this.brandService.createbrand(newBrand).subscribe( data =>{
    console.log(data);
    this.goToBrandList();
  },
  error => console.log(error));
  
}

onSubmit(){
  console.log(this.brand);
  this.saveBrand();

  }

}
