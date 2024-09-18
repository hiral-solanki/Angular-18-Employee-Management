import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpListComponent } from './employees/emp-list/emp-list.component';
import { EmpFormComponent } from './employees/emp-form/emp-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpListComponent,EmpFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Employee Management';
}
