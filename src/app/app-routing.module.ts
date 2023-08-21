import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { LoginComponent } from './components/login/login.component';

import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path :'',
    component : LoginComponent
  },
  {
    path :'employees', 
    component : EmployeesListComponent
  },
  {
    path:'employees/add',
    component :AddEmployeeComponent
  },
  {
    path:'employees/edit/:id',
    component :EditEmployeeComponent
  },
  
   {
     path:'signup',
    component: SignupComponent 
   },
   {
     path:'items/add',
     component:AddItemComponent
   },
   {
     path:'items',
     component:ItemsListComponent
   }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
