import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/employees.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees;
  constructor(private empService:EmployeesService,
    private toster:ToastrService) { }

  ngOnInit() {
    this.employeeList();
    

  }

  employeeList(){
    this.empService.getEmployeeList().subscribe((data)=>{
      this.employees=data;
      console.log(data);
    });


  }
  employeeEdit(emp:string){
    debugger;
    console.log(emp);
    Object.assign(this.empService.employee,emp)

  }
  employeeDelete(id:number){
    debugger;
    console.log();
    this.empService.deletEmployee(id).subscribe((res)=>{
 this.empService.getEmployeeList();
 this.toster.success('delete !','employee record');
 this.empService.getEmployeeList();

    })
  }

}
