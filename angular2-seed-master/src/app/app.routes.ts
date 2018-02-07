import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/employee.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { TableComponent } from './home/employee.table';

export const rootRouterConfig: Routes = [
  {path: 'tab', component: TableComponent },
   // {path : 'tab/:firstName', component: TableComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: 'tab', pathMatch: 'full' }

];

