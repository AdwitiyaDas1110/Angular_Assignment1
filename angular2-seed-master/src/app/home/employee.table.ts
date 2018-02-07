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
     empGetService = new EmployeeService();
      constructor(private router : Router,
                 private empService : EmployeeService){
              
     }
    ngOnInit(){
        this.empList=this.empGetService.getEmployee(); 
        console.log(this.empList);
        
    }
    showDetails(){
     //   console.log("Hellllllooooo!!");
     
    }
    

}