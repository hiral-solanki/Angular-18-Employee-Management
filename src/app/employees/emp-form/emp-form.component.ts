import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { Router,Route, ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-emp-form',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './emp-form.component.html',
  styleUrl: './emp-form.component.scss'
})
export class EmpFormComponent implements OnInit {
   employees : any = {
      name:'',
      email:'',
      phone:'',
      salary:''
   };
   empService = inject(EmployeesService);
   router = inject(Router);
   id : number | null = null;
   constructor(private route : ActivatedRoute){}
   ngOnInit(): void {
     this.id = +this.route.snapshot.paramMap.get('id')!;
      if(this.id){
        this.empService.getEmployee(this.id).subscribe(data=>{
          console.log(data);
          this.employees = data;
        });
      }
    }
   saveEmployee(): void 
   {
    if(this.id){
      this.empService.updateEmployee(this.id,this.employees).subscribe(()=>{
        this.router.navigateByUrl('/');
      })
    }
    else
    {
      this.empService.createEmployee(this.employees).subscribe(()=>{
        this.router.navigateByUrl('/');
      })
    }
  }
}