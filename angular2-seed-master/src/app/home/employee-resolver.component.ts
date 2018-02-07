import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HomeComponent} from './employee.component';

@Injectable()
    export class EmployeeResolver implements Resolve<HomeComponent>{
        resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<HomeComponent>{
            let username = route.params['id'];
            return null;
        
    }
}
