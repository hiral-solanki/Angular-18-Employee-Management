import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { employees } from '../model/employees';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.scss'
})
export class EmpListComponent implements OnInit {
  employees: any[] = [];
  http = inject(HttpClient);
  empService = inject(EmployeesService);
  ngOnInit(): void {
    this.empService.getEmployees().subscribe(data=>{
      this.employees = data;
    })
    
  }
  deleteEmp(empId:number){
    let c = confirm('Are you sure you want to delete employee?');
    if(c){
      this.empService.deleteEmployee(empId).subscribe({
        next:()=>{
          this.employees = this.employees.filter( employ => employ.id !== empId);
        },
        error:()=>{
          alert('Error');
        }
      })
    }
  }
}