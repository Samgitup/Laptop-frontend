import { Component, OnInit } from '@angular/core';
import { Showroom } from '../showroom';
import { Router } from '@angular/router';
import { ShowroomService } from '../showroom.service';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {
  showrooms!: Showroom[];
  constructor(private showroomService: ShowroomService,
    private router: Router) { }
    showroomId: any;
  ngOnInit(): void {
    
    this.getShowrooms();
  }
  private getShowrooms(){
    this.showroomService.getShowroomList().subscribe((data: Showroom[]) => {
      this.showrooms = data;
      console.log(this.showrooms);
    });
  }
  showroomDetails(showroomId: number){
    this.router.navigate([`delete-showroom/${showroomId}`]);
  }
  updateShowroom(showroomId: number){
    this.router.navigate([`update-showroom/${showroomId}`]);
  }
  deleteShowroom(showroomId: number){
    this.showroomService.deleteShowroom(showroomId).subscribe( data => {
      console.log(data)
      
    })
    this.ngOnInit();
  }

}
