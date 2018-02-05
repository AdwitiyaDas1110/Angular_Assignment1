import {Component, OnInit} from '@angular/core';
import {Employee} from './employee.model';
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

    ngOnInit(){
         this.qualifications = ['B.Tech', 'BCA','M.Tech','MCA','Other'];
         this.experiences = ['0yrs','1-3yrs','4-6yrs','6+yrs'];
         this.languages = [' Java',' C/C++',' C#',' Php',' Python'];
    }

    foo(lang: string)
    {
        if(this.selectedOptionArray.some(x => x === lang)){
          this.selectedOptionArray.splice(this.selectedOptionArray.indexOf(lang),1);
        }
        else{
          this.selectedOptionArray.push(lang);
        }
    }
   
     emp = new Employee('','','','','','','','','','',this.selectedOptionArray);///,false,false,false,false,false);
     submitDetails(){
       console.log(this.emp);
     }
}

