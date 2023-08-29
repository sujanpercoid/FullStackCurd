import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';

import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';

import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CommonComponent } from './components/common/common.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';

import { ItemsListComponent } from './components/items/items-list/items-list.component';

import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { ProductDetailComponent } from './components/items/product-detail/product-detail.component';
import { YourprodComponent } from './components/items/yourprod/yourprod.component';







@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SignupComponent,
    LoginComponent,
    CommonComponent,
    AddItemComponent,
     
    ItemsListComponent,
         
          ProfileViewComponent,
                    EditProfileComponent,
                    ProductDetailComponent,
                    YourprodComponent
                    
                   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
