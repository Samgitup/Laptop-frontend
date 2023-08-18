import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.css']
})
export class UpdateLaptopComponent implements OnInit {
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
      this.laptopId = this.brandService.laptopId;
      this.laptopService.getLaptopById(this.laptopId).subscribe({
        next : (data:any)=>{this.laptop=data,console.log(data)}
      })
     }

  ngOnInit(): void {
    this.laptopService.getLaptopById(this.laptopId).subscribe({
      next : (data:any)=>{this.laptop=data,console.log(data)
      
      this.laptopName=data.laptopName;
      this.laptopPrice=data.price;
      this.laptopVersion=data.version;
      
      
      
      }
    })


   
  
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
  this.laptopService.updateLaptop(this.updatelaptop).subscribe( data =>{
    console.log(data);
    this.goToLaptopList();
  },
  error => console.log(error));
}

  onSubmit(){
  console.log(JSON.stringify(this.updatelaptop))
  this.saveLaptop()
  }
 
  

  goToLaptopList()
   {
    this.router.navigate(['/laptop-list']);
  }
  goToLaptops(laptopId:number){
    this.router.navigate(['/laptop-list']);
  }

}
















