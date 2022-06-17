import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AregisterComponent } from './aregister/aregister.component';

// import { AregisterComponent } from './aregister/aregister.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';

import { CreateShowroomComponent } from './create-showroom/create-showroom.component';
import { DeleteBrandComponent } from './delete-brand/delete-brand.component';
import { DeleteShowroomComponent } from './delete-showroom/delete-showroom.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { SloginComponent } from './slogin/slogin.component';
import { SregisterComponent } from './sregister/sregister.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { UpdateShowroomComponent } from './update-showroom/update-showroom.component';
import { UserBrandComponent } from './user-brand/user-brand.component';
import { UserLaptopComponent } from './user-laptop/user-laptop.component';

const routes: Routes = [

  {path: 'homepage',component: HomepageComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'user-brand',component: UserBrandComponent},
  {path: 'user-laptop',component: UserLaptopComponent},


  {path : 'sregister',component : SregisterComponent},
  {path : 'slogin',component : SloginComponent},
  {path: 'showrooms', component: ShowroomComponent},
  {path: 'create-showroom', component: CreateShowroomComponent},
  // {path: '', redirectTo: 'showrooms', pathMatch: 'full'},
  {path: 'update-showroom/:showroomId', component: UpdateShowroomComponent},
  {path: 'delete-showroom/:showroomId', component:  DeleteShowroomComponent},
  {path: 'laptop-list',component: LaptopListComponent},
  {path: 'brand-list',component: BrandListComponent},
  {path: 'create-brand',component: CreateBrandComponent},
  {path: 'update-brand/:brandId',component:UpdateBrandComponent },
  {path: 'brand-details/:brandId',component:DeleteBrandComponent },
  {path: 'update-laptop/:laptopId',component:UpdateLaptopComponent },
  {path: 'create-laptop',component:CreateLaptopComponent },
  {path: 'laptop-details/:laptopId',component:LaptopDetailsComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
