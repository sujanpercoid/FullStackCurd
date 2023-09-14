import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendCart } from 'src/app/models/cart.model';
import { CartChange } from 'src/app/models/cartchange.model';
import { CartData } from 'src/app/models/returncart.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : any;
  productId :any;
  user_sessionid : any;
  price : any;
  count : any;
  productname: any;
  noItemInCart:boolean=false;
  productInfo: any;
  grandTotal: any;

  
  constructor(private route : ActivatedRoute,private employeesService: EmployeesService,private router: Router)
  {
    this.count=1;
  }
  ngOnInit(): void {
    this.user_sessionid=sessionStorage.getItem('contactid');
    this.route.paramMap.subscribe({
      next:(params) => {
        console.log(params);
        
         const id = params.get('id');
         
         if (id){
           this.employeesService.getCart(id)
           .subscribe({
             next:(response) =>{
               this.cart=response;
               if (this.cart.message == "No item in cart"){
                this.noItemInCart=true;
               }
               this.productInfo = response; 
               this.grandTotal = this.cart.grandTotal
               console.log("cart",this.cart);
             

              }
              
           })

         }
      } 
    })
     
  }
  increaseCount(productId: number,price : number,productname : string) {
    this.productId = productId;
    this.productname = productname;
    this.price = price;
    let ichange : SendCart ={ contactid: this.user_sessionid, productid: this.productId ,price : this.price,productname: this.productname,count :this.count};
    this.employeesService.incCount(ichange).subscribe({
      next:(response)=>{
        // alert("Item Added");
        window.location.reload();
      }
      
    });
    console.log(ichange);
}

    
  

  decreaseCount(productId: number,price : number,productname : string) {
    this.productId = productId;
    this.productname = productname;
    this.price = price;
    let dchange :  SendCart ={ contactid: this.user_sessionid, productid: this.productId ,price : this.price,productname: this.productname,count :this.count};
    this.employeesService.decCount(dchange).subscribe({
      next:(response)=>{
        // alert("Item Removed");
        window.location.reload();
      }
      
    });
    console.log(dchange);
    
  }
}
    

  



