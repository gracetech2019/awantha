import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

import {RootUrl} from '../RootUrl/rootUrl';

import{EmployeesModel} from '../model/employees-model'

const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})
  };
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employee:EmployeesModel;
  counter=0;
 // private mocurl:  string="http://localhost:3201/employee";

  constructor(private _http:HttpClient) { }

  submitEmployees(data){  
    //debugger;
   return this._http.post(`${RootUrl}/employee`,data,httpOptions);
  // return this._http.post(this.mocurl, data, httpOptions)  

  }
  getEmployeeList(){
    return this._http.get(`${RootUrl}/employee`)
  }

  updateEmployee(data){
    this.counter=1;
    const id=data.id;
    delete data.id;

return this._http.put(`${RootUrl}/employee/${id}`,data,httpOptions)

  }
  deletEmployee(id:number){
    debugger;
    return this._http.delete(`${RootUrl}/employee/${id}`,httpOptions)
    //return this._http.delete(this.mocurl+'/'+id , httpOptions);
    
  }
}
