import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { CartComponent } from './components/items/cart/cart.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { ProductDetailComponent } from './components/items/product-detail/product-detail.component';
import { YourprodComponent } from './components/items/yourprod/yourprod.component';

import { LoginComponent } from './components/login/login.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';

import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path :'',
    component : LoginComponent
  },
  {
    path :'employees', 
    component : EmployeesListComponent,canActivate:[authGuard]
  },
  {
    path:'employees/add',
    component :AddEmployeeComponent,canActivate:[authGuard]
  },
  {
    path:'employees/edit/:id',
    component :EditEmployeeComponent,canActivate:[authGuard]
  },
  
   {
     path:'signup',
    component: SignupComponent,
   },
   {
     path:'items/add',
     component:AddItemComponent,canActivate:[authGuard]
   },
   {
     path:'items',
     component:ItemsListComponent,canActivate:[authGuard]
   },
   {
    path:'profile',
   component: ProfileViewComponent,canActivate:[authGuard]
   },
   {
     path:'profile/edit',
     component:EditProfileComponent,canActivate:[authGuard]
   },
   { path: 'items/view/:id', 
     component: ProductDetailComponent 
    },
    {
      path:'items/yourprod',
      component:YourprodComponent
    },
    {
      path :'items/card/:id',
      component: CartComponent

    },
   
   { path: '**',
    redirectTo: '', component:LoginComponent
   },
   
   
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
