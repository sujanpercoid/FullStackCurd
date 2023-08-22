import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from 'src/app/models/signup.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  user_session: any;
  profiles: Signup = {
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
                this.profiles = response;
              }
            });
          }
    
    
  }
  
}
