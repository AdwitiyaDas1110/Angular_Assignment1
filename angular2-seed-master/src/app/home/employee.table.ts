import {Component,OnInit} from '@angular/core';
import {Employee} from '../home/employee.model';
import {ActivatedRoute,Router} from '@angular/router';
import {HomeComponent} from './employee.component';
import {EmployeeService} from '../employee.service';
@Component ({
    selector : 'tab',
    templateUrl : './employee.table.html'
})
export class TableComponent implements OnInit{
     empList : Array<Employee>;
  
      constructor(private router : Router,
                 private empService : EmployeeService){
              
     }
    ngOnInit(){
        this.empList=this.empService.getEmployee(); 
        console.log(this.empList);
        
    }
    delete(emp : Employee){
    //    alert(emp.username);
        this.empList = this.empService.deleteEmployee(emp);
    }
    editemp(employ:Employee){
    //    alert(employ.username);
        this.router.navigate(['\home',1,employ.username]);
    }
    
}