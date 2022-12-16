import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];

  constructor(private httpClient:HttpClient,private router:Router,private empService:EmployeeService){
    //this.employees=[{"id":1,"firstName":"Debanka","lastName":"Khan","emailId":"debankakhan926@gmail.com"}];

  }

  ngOnInit(){
    let resp= this.httpClient.get<Employee[]>("http://localhost:8080/api/v1/employees");
    resp.subscribe((data) => {
      this.employees=data;
    });
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.empService.deleteEmployeeById(id).subscribe(data=>{
      this.ngOnInit();
    })
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details',id])
  }


  }



