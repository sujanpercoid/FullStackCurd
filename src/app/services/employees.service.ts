import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SendCart } from '../models/cart.model';
import { CartChange } from '../models/cartchange.model';
import { Employee } from '../models/employee.model';
import { Item } from '../models/item.model';
import { Login } from '../models/login.model';
import { Product } from '../models/product.model';
import { CartData } from '../models/returncart.model';
import { Review } from '../models/review.model';
import { Signup } from '../models/signup.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService { 
 baseApiUrl:  string = 'https://localhost:7150';

  constructor(private http : HttpClient) { 
  }

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees' );
  }
  addEmployees(addEmployeeRequest: Employee): Observable<Employee>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000';
   return this.http.post<Employee>(this.baseApiUrl + '/api/employees',addEmployeeRequest);
  }
  getEmployee(id : string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/'+id);
  }
  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id, updateEmployeeRequest);
  }
  
  deleteEmployee(id : string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/'+id);
  }
  addSignup(addSignupRequest:Signup):Observable<Signup>{
    // addSignupRequest.id='00000000-0000-0000-0000-000000000000';
   return this.http.post<Signup>(this.baseApiUrl + '/api/auth/register',addSignupRequest);
  }
  addLogin(addLoginRequest:Login):Observable<Login>{
    //addSignupRequest.id='00000000-0000-0000-0000-000000000000';
   return this.http.post<Login>(this.baseApiUrl + '/api/auth/login', addLoginRequest);
  }
  getProfile(id : string):Observable<Signup>{
    return this.http.get<Signup>(this.baseApiUrl + '/api/auth/'+id);
  }
  updateProfile(id: string, updateProfileRequest: Signup): Observable<Signup> {
    return this.http.put<Signup>(this.baseApiUrl + '/api/auth/' + id, updateProfileRequest);
  }
  deleteProfile(id : string):Observable<Signup>{
    return this.http.delete<Signup>(this.baseApiUrl + '/api/auth/'+id);
  }
  addItem(addItemRequest: Item): Observable<Item>{
    //addItemRequest.id='00000000-0000-0000-0000-000000000000';
   return this.http.post<Item>(this.baseApiUrl + '/api/auth/UploadImage',addItemRequest);
  }
  addProdu(addProdcReq: Product):Observable<Product>{
    return this.http.post<Product>(this.baseApiUrl + '/api/product',addProdcReq);
  }
  getAllProduct() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseApiUrl + '/api/product' );
  }
  getProduct(id : string):Observable<Product>{
    return this.http.get<Product>(this.baseApiUrl + '/api/product/'+id);
  }
  getMyProd(id : number) : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseApiUrl + '/api/product/myprod/'+id );
  }
  addReview(addReview : Review): Observable<Review>{
    return this.http.post<Review>(this.baseApiUrl + '/api/product/review',addReview);
  }
  getReview(id : number): Observable<Review[]>{
    return this.http.get<Review[]>(this.baseApiUrl +  '/api/product/review/'+id);
  }
  addToCart(cart: SendCart):Observable<SendCart>{
    return this.http.post<SendCart>(this.baseApiUrl +  '/api/product/cart',cart);

  }
  getCart(id : any): Observable<CartData[]>{
    return this.http.get<CartData[]>(this.baseApiUrl +  '/api/product/cart/'+id);
  }
  incCount(cart: SendCart):Observable<SendCart>{
    return this.http.post<SendCart>(this.baseApiUrl +  '/api/product/inc',cart);
  }
  decCount(cart: SendCart):Observable<SendCart>{
    return this.http.post<SendCart>(this.baseApiUrl +  '/api/product/dec',cart);
  }
  getSeller(id: any) {
    return this.http.get(this.baseApiUrl + '/api/product/seller/' + id);
}

  
  
  
}
