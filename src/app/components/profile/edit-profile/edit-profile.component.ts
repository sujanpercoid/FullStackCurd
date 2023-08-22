import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from 'src/app/models/signup.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user_session: any;
  profile: Signup = {
    id: '',
    username: '',
    password: '',
    fullname: '',
    phone: 0,
    email: ''
  };
  id: any
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user_session = sessionStorage.getItem('username');
    this.id = sessionStorage.getItem('id');
    
    if (this.id) {
            this.employeeService.getProfile(this.id).subscribe({
              next: (response) => {
                this.profile= response;
              }
            });
          }
  }
  updateProfile(){
    this.employeeService.updateProfile(this.profile.id,this.profile)
    .subscribe({
      next: (response)=>
      {
        this.router.navigate(['profile']);
      }
    })

  }
  deleteProfile(id: string){
    
    this.employeeService.deleteProfile(id)
    .subscribe({

      
      next: (response)=>
      {
        sessionStorage.clear();
        this.router.navigate(['']);
      },
      
    })
    
    }

    // sessionOut(): void {
    //   sessionStorage.clear();
    //   alert('logout');
    // }
    
}


