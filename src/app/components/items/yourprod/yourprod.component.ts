import { Component, OnInit } from '@angular/core';
import { MYProduct } from 'src/app/models/myprod.model';
import { Product } from 'src/app/models/product.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-yourprod',
  templateUrl: './yourprod.component.html',
  styleUrls: ['./yourprod.component.css']
})
export class YourprodComponent implements OnInit {
  myprods: MYProduct[]=[];
  id: any ;
  constructor(private employeesService: EmployeesService) {}
  ngOnInit(): void {
    this.id = sessionStorage.getItem('contactid');
    console.log(this.id);
    if(this.id){
      this.employeesService.getMyProd(this.id).subscribe({
        next:(response)=>{
          this.myprods = response;
          console.log(this.myprods);
        }
        
      });
    }
    
  }

}
