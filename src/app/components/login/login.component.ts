import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addLoginRequest: Login ={
    username:'',
    password :''
  };
  
  constructor(private employeeService: EmployeesService, private router: Router) {}
ngOnInit(): void {}
addLogin(){
  this.employeeService.addLogin({
    username : this.addLoginRequest.username,
    password: this.addLoginRequest.password
  }).subscribe(
    (login) => {
      console.log(login);
      // Clear the form fields
      this.addLoginRequest = {
        
        username: '',
        password: ''
      };
      
      
      this.router.navigate(['employees']);
    },
    (error) => {
      console.error("An error occurred:", error);
      if (error.error && typeof error.error === 'string') {
        alert(error.error);
      } else {
        // Handle other types of errors as needed
      }
      // Clear the form fields even on error
      this.addLoginRequest = {
        
        username: '',
        password: ''
      };
      
    }
  );
  
  
}

}
