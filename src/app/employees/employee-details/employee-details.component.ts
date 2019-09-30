import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{EmployeesService} from '../../shared/employees.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _empService:EmployeesService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  save(data:NgForm):void{
    //debugger;
    if(data.value.id!=null){
      this._empService.updateEmployee(data.value).subscribe((data)=>{
          
        
        this._empService.getEmployeeList();
        this.toastr.success('successfull update','employee details');
        this.resetForm();
        

      })



    }
    else{
this._empService.submitEmployees(data.value).subscribe((res)=>{
  this.toastr.success('Successfull Submit', 'Employee Details!');


})}
    


  }
  resetForm(data?:NgForm){
    
if(data!=null){
this.resetForm();
}
this._empService.employee={
  id:null,
  name:'',
  address:''

}

  }

}
