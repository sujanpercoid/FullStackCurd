import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UritemEdit } from 'src/app/models/edituritem.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-ur-item-edit',
  templateUrl: './ur-item-edit.component.html',
  styleUrls: ['./ur-item-edit.component.css']
})
export class UrItemEditComponent implements OnInit{
  uritems: UritemEdit ={
    productId:0,
    productName :'',
    category :'',
    price :0,
    description :''
  };
  constructor(private route : ActivatedRoute,private employeeService: EmployeesService,private router: Router){}
ngOnInit(): void {
  this.route.paramMap.subscribe({
    next:(params)=>{
      const id = params.get('id');
      
      if(id){
        this.employeeService.geturitem(id)
        .subscribe({
          next:(response)=>{
            this.uritems =response;
            console.log(this.uritems);
          }
        })
      }
    }
  })
}
deleteItem(id : number){
  this.employeeService.deleteItem(id)
  .subscribe({
    next : (response) =>
    {
      console.log(response);
      this.router.navigate(['/items/yourprod']);
    },
  })
}
updateProfile(id : number){
  this.employeeService.updateItem(id,this.uritems)
  .subscribe({
    next : (response) =>
    {
      console.log(response);
      this.router.navigate(['/items/yourprod']);
    },
  })
}
}
