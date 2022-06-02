import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Showroom } from '../showroom';
import { ShowroomService } from '../showroom.service';

@Component({
  selector: 'app-update-showroom',
  templateUrl: './update-showroom.component.html',
  styleUrls: ['./update-showroom.component.css']
})
export class UpdateShowroomComponent implements OnInit {

  showroom: Showroom = new Showroom();
  showroomId: any;
  
  


  constructor(private showroomService: ShowroomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.showroomId = this.route.snapshot.params['showroomId'];
    this.showroomService.getShowroomById(this.showroomId).subscribe(data => {
      this.showroom = data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.showroom);
    this.showroomService.updateShowroom(this.showroomId, this.showroom).subscribe( data =>{
      this.goToShowroomList();
    }
    , error => console.log(error));
  }
  goToShowroomList(){
    this.router.navigate(['/showrooms']);
  }

}
