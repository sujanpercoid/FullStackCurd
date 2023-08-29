import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendCart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit{
  user_sessionid : any;
  productId : any;
  products:Product[]=[];
  constructor(private employeesService: EmployeesService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.user_sessionid=sessionStorage.getItem('contactid');
    
    // const test = this.route.snapshot.paramMap.get("userId");
    // console.log(test);
    
    this.employeesService.getAllProduct().subscribe({
      next :(products)=> {
        // console.log(products);
        this.products =products;
        console.log(products);
      },
      error: (response) => {
        console.log(response);

        // sessionStorage.setItem('pid',response.productId);
      }
    })
  }
  addCart(productId: Number) {
    this.productId = productId;
    let sendCart: SendCart = { contactid: this.user_sessionid, productid: this.productId };
    
    this.employeesService.addToCart(sendCart).subscribe({
      
    });
    console.log(sendCart);
  }
  

  
  

}
