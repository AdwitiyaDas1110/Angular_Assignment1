import { Injectable } from '@angular/core';
import { HomeComponent } from './home/employee.component';
import {Employee} from './home/employee.model';
@Injectable()
export class EmployeeService {
        emp_array : Array<Employee> = [];
        getEmployee() : Array<Employee>{
                return this.emp_array;
        }
        setEmployee(emp : Employee){
                this.emp_array.push(emp);
        }
    }

