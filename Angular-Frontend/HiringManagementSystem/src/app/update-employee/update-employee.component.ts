import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee: Employee = new Employee();
  constructor(private empService:EmployeeService,private router:ActivatedRoute,private router1:Router){}

  ngOnInit(): void {
    this.id= this.router.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })
  }

  onSubmit(){
    this.empService.updateEmployeeById(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    });
  }

  goToEmployeeList(){
    this.router1.navigate(['/employees']);
  }

}
