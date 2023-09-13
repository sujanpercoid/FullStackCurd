import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Review } from 'src/app/models/review.model';
import { eReview } from 'src/app/models/ereview.model';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit{
  id:any;
  reviews:any;
  ereview : Review ={
    reviewId: 0,
    username :'',
    productid :0,
    reviews : '',
    product:''
    

  }
  constructor(private route : ActivatedRoute,private employeeService: EmployeesService,private router: Router,private fb : FormBuilder){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        console.log(this.id);
        if (this.id) {
          this.employeeService.getEditReview(this.id).subscribe({
            next: (response) => {
              this.ereview = response;
              console.log(this.ereview);
            },
          });
        }
      },
    });
  }
       
  updateProfile(){}
  deleteProfile(id: number){}

}
