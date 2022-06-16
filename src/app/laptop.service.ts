import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private baseURL = "http://localhost:8092/abcd/shop";
  laptopId!: number;
  // getBrandId: any;
  brandId!: number;

  constructor(private httpClient: HttpClient) { }

  getLaptopList(): Observable<Laptop[]>{
    return this.httpClient.get<Laptop[]>(`${this.baseURL}/getlaptops`);
  }

  
  getLaptopById(laptopId: number): Observable<Laptop>{
    console.log(laptopId);
    return this.httpClient.get<Laptop>(`${this.baseURL}/laptop/${laptopId}`);
  }
  createLaptop(updateLaptop:any): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createlaptop`,updateLaptop);
  }

  updateLaptop(updateLaptop:any): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updatelaptop`,updateLaptop);
  }
  deletelaptop(laptopId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletelaptopbyid/${laptopId}`);
  }


  getBrandId(){
    return this.brandId;
    console.log(this.brandId)
  }
  setBrandId(brandId:number){
    this.brandId =brandId;
    console.log(this.brandId)
  }
 
}
