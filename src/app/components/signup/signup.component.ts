import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  addSignupRequest : Signup={
    id: '',
    firstname: '',
    lastname : '',
    email:'',
    username: '',
    password:'',
  };

  constructor(private employeeService: EmployeesService,private router: Router){}
  ngOnInit(): void {}
  addSignup(){
    this.employeeService.addSignup(this.addSignupRequest)
    .subscribe((signup) => {
        this.router.navigate(['signup']);
      }
    );
  }

}
