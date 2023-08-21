import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  addSignupRequest: Signup = {
    id: '',
    username: '',
    password: ''
  };
  
  confirmPassword: string = '';

  constructor(private employeeService: EmployeesService, private router: Router) {}

  ngOnInit(): void {}

  addSignup() {
    if (this.addSignupRequest.password !== this.confirmPassword) {
      alert("Passwords do not match. Please confirm your password.");
      return;
    }

    this.employeeService.addSignup({
      id: this.addSignupRequest.id,
      username: this.addSignupRequest.username,
      password: this.addSignupRequest.password
    }).subscribe(
      (signup) => {
        console.log(signup);
        // Clear the form fields
        this.addSignupRequest = {
          id: '',
          username: '',
          password: ''
        };
        this.confirmPassword = '';
        alert("User Created Successfully");
        this.router.navigate(['login']);
      },
      (error) => {
        console.error("An error occurred:", error);
        if (error.error && typeof error.error === 'string') {
          alert(error.error);
        } else {
          // Handle other types of errors as needed
        }
        // Clear the form fields even on error
        this.addSignupRequest = {
          id: '',
          username: '',
          password: ''
        };
        this.confirmPassword = '';
      }
    );
  }
}