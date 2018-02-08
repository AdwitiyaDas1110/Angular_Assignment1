import { Injectable } from '@angular/core';
import { HomeComponent } from './home/employee.component';
import {Employee} from './home/employee.model';
import {Router} from '@angular/router';
@Injectable()
export class EmployeeService {
        static emp_array : Array<Employee> = [];
        constructor(private route:Router){

        }
        getEmployee() : Array<Employee>{
                return EmployeeService.emp_array;
        }
        setEmployee(emp : Employee){
                EmployeeService.emp_array.push(emp);
        }
        deleteEmployee(emp : Employee):Array<Employee>{
                EmployeeService.emp_array.splice(EmployeeService.emp_array.indexOf(emp),1);
                return EmployeeService.emp_array;
        }
       
    }

