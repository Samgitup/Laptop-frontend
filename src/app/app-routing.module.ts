import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShowroomComponent } from './create-showroom/create-showroom.component';
import { DeleteShowroomComponent } from './delete-showroom/delete-showroom.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { UpdateShowroomComponent } from './update-showroom/update-showroom.component';

const routes: Routes = [
  {path: 'showrooms', component: ShowroomComponent},
  {path: 'create-showroom', component: CreateShowroomComponent},
  {path: '', redirectTo: 'showrooms', pathMatch: 'full'},
  {path: 'update-showroom/:showroomId', component: UpdateShowroomComponent},
  {path: 'delete-showroom/:showroomId', component:  DeleteShowroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
