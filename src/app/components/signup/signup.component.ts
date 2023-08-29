import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup! :FormGroup;
  
  confirmPassword: string = '';

  constructor(private employeeService: EmployeesService, private router: Router,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.signup=this.fb.group({
      fullname: new FormControl ('',Validators.required),
      username: new FormControl('',[Validators.required,Validators.minLength(3)]),
      phone: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      email:new FormControl ('',Validators.required)
    })
  }

  addSignup() {
    const signupData: Signup = Object.assign(this.signup.value);
    // if (this.signup.password !== this.confirmPassword) {
    //   alert("Passwords do not match. Please confirm your password.");
    //   return;
    // }
    // if (this.addSignupRequest.username == null ||this.addSignupRequest.username ==" ") {
    //   alert("username xaina bhag.,");
    //   return;
    // }

    this.employeeService.addSignup(signupData).subscribe(
      (signup) => {
        console.log(signup);
        // Clear the form fields
        // this.signup = {
          
        //   username: '',
        //   password: '',
        //   fullname :'',
        //   phone : 0,
        //   email:''

        // };
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
        //clear form
        this.signup.reset();
        
         this.confirmPassword = '';
      }
    );
  }
}
