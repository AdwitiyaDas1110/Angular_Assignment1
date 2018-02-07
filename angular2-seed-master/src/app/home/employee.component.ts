import {Component, OnInit} from '@angular/core';
import {Employee} from './employee.model';
import {TableComponent} from './employee.table';
import {Router} from '@angular/router';
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
   constructor(private router : Router){
              
     }
    ngOnInit(){
         this.qualifications = ['B.Tech', 'BCA','M.Tech','MCA','Other'];
         this.experiences = ['0yrs','1-3yrs','4-6yrs','6+yrs'];
         this.languages = [' Java',' C/C++',' C#',' Php',' Python'];
    }
     emp = new Employee('','','','','','','','','','',this.selectedOptionArray);
    empSendService = new EmployeeService();
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
     //  alert(data.firstName);
       this.empSendService.setEmployee(this.emp);
    //   EmployeeService.emp_array.push(this.emp);
       this.router.navigate(['/tab']);//,data.firstName]);
      // console.log(TableComponent.empList);
      // let emplist = new TableComponent();
      // emplist.showDetails();
   
     }
}

