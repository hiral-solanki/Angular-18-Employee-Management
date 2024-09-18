import { Routes } from '@angular/router';
import { EmpListComponent } from './employees/emp-list/emp-list.component';
import { EmpFormComponent } from './employees/emp-form/emp-form.component';

export const routes: Routes = [
    {
        path:'',
        component:EmpListComponent
    },
    {
        path:'add',
        component:EmpFormComponent
    },
    {
        path:'edit/:id',
        component:EmpFormComponent
    }
];
