import {Component, OnInit} from '@angular/core';
import {Employee} from './employee.model';
import {TableComponent} from './employee.table';
import {Router, ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'home',
  styleUrls: ['./employee.component.css'],
  templateUrl: './employee.component.html'
})
export class HomeComponent implements OnInit {
    qualifications : Array<string> = [];
    experiences : Array<string> = [];
    languages : Array<string> = [];
    selectedOptionArray: Array<string> = [];
   constructor(private router : Router, private activatedRoute : ActivatedRoute, private empService : EmployeeService){
              
     }

    ngOnInit(){
         this.qualifications = ['B.Tech', 'BCA','M.Tech','MCA','Other'];
         this.experiences = ['0yrs','1-3yrs','4-6yrs','6+yrs'];
         this.languages = [' Java',' C/C++',' C#',' Php',' Python'];
         let flag = this.activatedRoute.snapshot.params['flag'];
         if(flag == 1){
           let uname = this.activatedRoute.snapshot.params['username'];
           for(var i = 0 ; i < EmployeeService.emp_array.length; i++){
             if(EmployeeService.emp_array[i].username == uname)
              this.emp = EmployeeService.emp_array[i];
              this.empService.deleteEmployee(this.emp);
           }
         }
         

    }
     emp = new Employee('','','','','','','','','','',this.selectedOptionArray);
   
    foo(lang: string)
    {
        if(this.selectedOptionArray.some(x => x === lang)){
          this.selectedOptionArray.splice(this.selectedOptionArray.indexOf(lang),1);
        }
        else{
          this.selectedOptionArray.push(lang);
        }
    }

    submitDetails() : void {
        
       let data = JSON.parse(JSON.stringify(this.emp));
       this.empService.setEmployee(this.emp);
       this.router.navigate(['/tab']);
      
     }
}

