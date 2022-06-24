import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShowroomComponent } from './showroom/showroom.component';
import { CreateShowroomComponent } from './create-showroom/create-showroom.component';
import { UpdateShowroomComponent } from './update-showroom/update-showroom.component';
import { DeleteShowroomComponent } from './delete-showroom/delete-showroom.component'
import { CommonModule } from '@angular/common';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { DeleteBrandComponent } from './delete-brand/delete-brand.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { HomepageComponent } from './homepage/homepage.component';

import { MenuComponent } from './menu/menu.component';
import { LogComponent } from './log/log.component';
import { SregisterComponent } from './sregister/sregister.component';
import { SloginComponent } from './slogin/slogin.component';
import { LoginComponent } from './login/login.component';
import { UserBrandComponent } from './user-brand/user-brand.component';
import { UserLaptopComponent } from './user-laptop/user-laptop.component';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ShowroomComponent,
    CreateShowroomComponent,
    UpdateShowroomComponent,
    DeleteShowroomComponent,
    CreateLaptopComponent,
    LaptopListComponent,
    BrandListComponent,
    CreateListComponent,
    UpdateBrandComponent,
    CreateBrandComponent,
    DeleteBrandComponent,
    BrandDetailsComponent,
    UpdateLaptopComponent,
    LaptopDetailsComponent,
    HomepageComponent,
     MenuComponent,
    LogComponent,
    SregisterComponent,
    SloginComponent,
    UserBrandComponent,
    UserLaptopComponent,
    SearchComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
