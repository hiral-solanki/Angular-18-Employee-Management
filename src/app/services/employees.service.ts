import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'http://localhost:3000/employees';
  http = inject(HttpClient);
  constructor() { }

  getEmployees(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  getEmployee(id:number):Observable<any>{
       return this.http.get<any>(`${this.apiUrl}/${id}`);

  }
  createEmployee(emp:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,emp);

  }
  updateEmployee(id:number,emp:any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`,emp);

  }
  deleteEmployee(id:number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
