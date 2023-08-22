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
  addLoginRequest: Login = {
    username: '',
    password: ''
  };

  constructor(private employeeService: EmployeesService, private router: Router) {}

  ngOnInit(): void {}

  addLogin() {
    this.employeeService.addLogin({
      username: this.addLoginRequest.username,
      password: this.addLoginRequest.password
    }).subscribe(
      (response: any) => {  // Use "response" instead of "login"
        console.log(response);
        // Save the token to local storage
              sessionStorage.setItem('token', response.token);
              sessionStorage.setItem('id', response.user.id);
              sessionStorage.setItem('username', response.user.username);
        
  
        
  
        this.router.navigate(['employees']);
      },

      // Error handling code...
      (error) => {
        console.error("An error occurred:", error);
        if (error.error && typeof error.error === 'string') {
          alert(error.error);
        } else {
          // Handle other types of errors as needed
        }
        //Clear the form incase of error
        this.addLoginRequest = {
          username: '',
          password: ''
        };
      }
    );
  }
  
}
