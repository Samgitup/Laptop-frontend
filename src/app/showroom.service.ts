import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Showroom } from './showroom';
@Injectable({
  providedIn: 'root'
})
export class ShowroomService {
  private baseURL = "http://localhost:8092/abcd/shop";

  goToShowroomList: any;

  
  private resultLocation:any;

  constructor(private httpClient: HttpClient) { }

  getShowroomList(): Observable<Showroom[]>{
    return this.httpClient.get<Showroom[]>(`${this.baseURL}/getshowrooms`);
  }
  createShowroom(showroom: Showroom): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createshowroom`, showroom);
  }
  getShowroomById(showroomId: number): Observable<Showroom>{
    console.log(showroomId);
    return this.httpClient.get<Showroom>(`${this.baseURL}/getshowroombyid/${showroomId}`);
  }
  updateShowroom(showroomId: number, showroom: Showroom): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateshowroom`, showroom);////id vennuna mattum use pannanuellate venna///
  }
  deleteShowroom(showroomId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteshowroombyid/${showroomId}`);
  }


 
  setLocation(obj:any){
    this.resultLocation=obj
  }
  getLocation(){
    return of(this.resultLocation)
  }

  getShowroomByLocation(location:any):Observable<any>{
    return this.httpClient.get(`${this.baseURL}/1getShowrooms/${location}`);
    }

  }


