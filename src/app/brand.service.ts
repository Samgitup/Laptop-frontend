import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from './brand';
import { Laptop } from './laptop';
import { Showroom } from './showroom';
@Injectable() export class DataService { serviceData!: string; }
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  showroomId!:number;
  private baseURL = "http://localhost:8092/abcd/shop";
  brandId!: number;
  laptopId!: number;

  constructor(private httpClient: HttpClient) { }

  getBrandList(): Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(`${this.baseURL}/getbrands`);
  }
  getBrandsByShowroomId(showroomId: number): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/1getbrand/${showroomId}`);
  }

  // getBrandList(showroomId:number,brand:Brand): Observable<Brand[]>{
  //   return this.httpClient.get<Brand[]>(`${this.baseURL}/getbrandY/${this.showroomId}`);
  // }
  getBrandById(brandId: number): Observable<Brand>{
    console.log(brandId);                                     
    return this.httpClient.get<Brand>(`${this.baseURL}/getbrandbyid/${brandId}`);
  }

  createbrand(brand: any): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createbrand`,brand);
  }

  // createbrand(setShowroomId:Showroom,brand: Brand): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}/createbrand`,setShowroomId);
  // }

  updateBrand( brandId:number,brandName:String,value:any): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/1updatebrand/${brandId}/${brandName}`,value);////id vennuna mattum use pannanuellate venna///
  }
 
  deleteBrand(brandId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletebrandbyid/${brandId}`);
  }
  /////////////////////////////////////////////////////////////////////////////
  getLaptopByBrandId(brandId:number):Observable<Laptop[]>{
    return this.httpClient.get<Laptop[]>(`${this.baseURL}/getlaptops/${brandId}`);
  }

   getShowroomId(){
    return this.showroomId;
  }
  setShowroomId(showroomId: number){
    this.showroomId = showroomId;
    console.log(this.showroomId)
  }
///////////////////////////////////////////////////////////////////////////////////
  getLaptopsByBrandId(brandId : number): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/getlaptops/${brandId}`)
  }
getBrandId(){
  return this.brandId;
}
setBrandId(brandId:number){
  this.brandId =brandId;
  console.log(brandId,"Set................");
  console.log(this.brandId)
}

setLaptopId(laptopId:number){
  this.laptopId =laptopId;
}

}
