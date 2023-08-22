import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Login } from '../models/login.model';
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
    addSignupRequest.id='00000000-0000-0000-0000-000000000000';
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
  
  
  
  
  
}
