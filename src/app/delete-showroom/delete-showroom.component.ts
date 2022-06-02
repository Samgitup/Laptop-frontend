import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Showroom } from '../showroom';
import { ShowroomService } from '../showroom.service';

@Component({
  selector: 'app-delete-showroom',
  templateUrl: './delete-showroom.component.html',
  styleUrls: ['./delete-showroom.component.css']
})
export class DeleteShowroomComponent implements OnInit {

  showroomId: any;
  showroom!: Showroom;
  

  constructor(private route: ActivatedRoute, private showroomService: ShowroomService) { }

  ngOnInit(): void {
    this.showroomId = this.route.snapshot.params['showroomId'];

    this.showroom = new Showroom();
    this.showroomService.getShowroomById(this.showroomId).subscribe( data => {
      this.showroom = data;
  });

  }
}



