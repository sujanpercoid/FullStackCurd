import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { Product } from 'src/app/models/product.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
  produc! : FormGroup;
  user_sessionid : any;
  
  

constructor(private employeeService: EmployeesService,private router: Router, private fb:FormBuilder){}
  ngOnInit(): void {
    this.user_sessionid = sessionStorage.getItem('contactid');
    this.produc=this.fb.group({
      category : new FormControl('',[Validators.required,Validators.minLength(3)]),
      price : new FormControl('',Validators.required),
      productname : new FormControl('',[Validators.required,Validators.minLength(3)]),
      description : new FormControl('',[Validators.required,Validators.minLength(10)])
    })
  }
  onPost(){
    const productData :Product=Object.assign(this.produc.value);
    productData.userId=this.user_sessionid;
    this.employeeService.addProdu(productData).subscribe(
      (res)=>{
        alert("Item Sucesfully Added.");
        this.router.navigate(['items']);
      },
      (error)=>{
        console.error("An error occurred:", error);
        if (error.error && typeof error.error === 'string') {
          alert(error.error);
        } else {
          // Handle other types of errors as needed
        }
        this.produc.reset();

      }
      
    )

  }
  



}
