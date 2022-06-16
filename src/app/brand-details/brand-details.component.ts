import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {
  brandId: any;
  brand!: Brand;

  constructor(private route: ActivatedRoute, private brandService:BrandService) { }

  ngOnInit(): void {

    this.brandId = this.route.snapshot.params['brandId'];

    this.brand = new Brand();
    this.brandService.getBrandById(this.brandId).subscribe( data => {
      this.brand = data;
  });
  }

}
