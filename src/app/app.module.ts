import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { CreateShowroomComponent } from './create-showroom/create-showroom.component';
import { UpdateShowroomComponent } from './update-showroom/update-showroom.component';
import { DeleteShowroomComponent } from './delete-showroom/delete-showroom.component'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    RegisterComponent,
    ShowroomComponent,
    CreateShowroomComponent,
    UpdateShowroomComponent,
    DeleteShowroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
