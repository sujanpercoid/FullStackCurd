import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Review } from 'src/app/models/review.model';
import { Sellerde } from 'src/app/models/seller.model';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  
})
export class ProductDetailComponent implements OnInit {
  productId :any;
  review! : FormGroup;
  user_sessionid : any;
  id : any;
  reviews: Review[]=[];
  sellerde: any; 
  products: Product={
    userId:'',
    productId:0,
    productName:'',
    description:'',
    price:0,
    category:''
  };
  
  constructor(private route : ActivatedRoute,private employeeService: EmployeesService,private router: Router,private fb : FormBuilder){}

  ngOnInit(): void {
    this.user_sessionid = sessionStorage.getItem('username');
    this.review=this.fb.group({
     reviews : new FormControl('',[Validators.required,Validators.minLength(2)])  
    })
    // sessionStorage.setItem('pid',response.productId);
    this.route.paramMap.subscribe({
      next:(params) => {
        
        
         this.id =params.get('id');
         
         console.log(this.id);
         
       
         if (this.id){
           this.employeeService.getProduct(this.id)
           .subscribe({
             next:(response) =>{
               console.log(response);
               console.log(this.id);
               
               this.products = response;

             }
           })

         }
         if(this.id){
          this.employeeService.getReview(this.id)
          .subscribe({
            next:(response) =>{
              console.log(response);
              
              this.reviews = response;
            } 
          });
        }
        
      }
    })

  }
  onPost() {
    if (this.id) {
      const reviewData: Review = Object.assign(this.review.value);
      reviewData.username = this.user_sessionid;
      reviewData.productid = this.id;
      
      this.employeeService.addReview(reviewData).subscribe(
        (response) => {
          alert("Comment Added.");
          
          this.review.reset();
          
          // Refresh the page
          window.location.reload();
        }
      )
    }
  }
  sellerDetails(productId: number) {
    this.productId = productId;
    console.log(this.productId);
    
    this.employeeService.getSeller(this.productId).subscribe((data) => {
      this.sellerde=data;
      
      console.log(this.sellerde); 
      
    });
  }
 
  
  
  sellerData: any[] = []; 

}
