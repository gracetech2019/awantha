import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import{FormsModule} from '@angular/forms'
import { EmployeesService } from '../shared/employees.service';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [EmployeesComponent, EmployeeDetailsComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule

  ],
  exports:[
    EmployeesComponent,
     EmployeeDetailsComponent,
      EmployeeListComponent

  ],
  providers:[EmployeesService]
})
export class EmployeesModule { }
