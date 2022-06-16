import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Brand } from '../brand';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {
  brandId: any;
  brand!: Brand;
  laptopId!: number;
  laptop!: Laptop;

  constructor(private route: ActivatedRoute,private laptopService:LaptopService
    ,private router : Router) { }

  ngOnInit(): void {
    this.laptopId = this.route.snapshot.params['laptopId'];

    this.laptop = new Laptop();
    this.laptopService.getLaptopById(this.laptopId).subscribe( data => {
      this.laptop = data;
  });
  }
  goToLaptopList()
  {
   this.router.navigate(['/laptop-list']);
 }
}
