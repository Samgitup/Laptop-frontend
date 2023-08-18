import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../brand.service';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'create-laptop',
  templateUrl: './create-laptop.component.html',
  styleUrls: ['./create-laptop.component.css']
})
export class CreateLaptopComponent implements OnInit {
  submitted:boolean=true;
  laptop : Laptop = new Laptop;

  laptopId!:number;
  brandId!: number;
  updatelaptop: {}={};
  laptopName:string=""
  laptopPrice:number=0;
  laptopVersion:string="";
  
  constructor( private laptopService : LaptopService,private brandService:BrandService,
    private route: ActivatedRoute,
    private router : Router) {
      this.brandId = this.brandService.brandId;
      // this.laptopId = this.brandService.laptopId;
      // this.laptopService.getLaptopById(this.laptopId).subscribe({
      //   next : (data:any)=>{this.laptop=data,console.log(data)}
      // })
     }

  ngOnInit(): void {
    
  }
updateLap(){
  const updatelap:any={
    laptopId:0,
   laptopName: "",
   price: 0,
   version: "",
   brands: { 
     brandId:0
   }
  }
  updatelap.laptopId=this.laptop.laptopId
  updatelap.laptopName=this.laptopName
  updatelap.price=this.laptopPrice
  updatelap.version=this.laptopVersion
  updatelap.brands.brandId=this.brandId
  this.updatelaptop={...updatelap}
 }

saveLaptop(){
  this.updateLap()
  this.laptopService.createLaptop(this.updatelaptop).subscribe( data =>{
    console.log(data);
    this.goToLaptopList();
  },
  error => console.log(error));
}

  onSubmit(){
  console.log(JSON.stringify(this.updatelaptop))
  this.saveLaptop()
  
  // this.goToLaptopList()
  }
 
  

  goToLaptopList()
   {
    this.router.navigate(['/laptop-list']);
  }


}
