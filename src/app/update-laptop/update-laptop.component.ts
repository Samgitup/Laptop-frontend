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


}
















// ngOnInit(): void {
//   this.brandId = this.brandService.brandId;
//   // console.log(this.brandId)
//   this.laptopId = this.brandService.laptopId;

// //     this.laptopId = this.route.snapshot.params['laptopId'];
// //     console.log(this.laptopId)
// //     this.brandId = this.route.snapshot.params['brandId'];
// // console.log(this.brandId)
// // this.brandService.getBrandById(this.brandId).subscribe(data => {
// //   this.laptop.brand = data;
// // }, error => console.log(error));


//   this.laptopService.getLaptopById(this.laptopId).subscribe(data => {
//     this.laptop = data;
//   }, error => console.log(error));
// }

// async onSubmit(){

//   // console.log(this.laptop);
//   // console.log(this.updatelaptop);
//   this.saveLaptop(this.brandId);
// //   const updatelaptop = {
// //     "laptopId":this.laptop.laptopId,
// //    "laptopName": this.laptop.laptopName,
// //    "price": this.laptop.price,
// //    "version": this.laptop.version,
  
// //    "brand": {  
// //      "brandId": this.brandId
// //    }
// //  }
// //   this.goToLaptopList();
// //   this.laptopService.updateLaptop(updatelaptop).subscribe( data =>{
// //     this.goToLaptopList();
// //   }
// //   , error => console.log(error));
 
// }
