import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagesComponent } from './pages/pages.component';
import { Graph1Component } from './pages/graph1/graph1.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children:
      [
        { path: 'dashboard', component: DashboardComponent },
        {path:'graph1',component: Graph1Component},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  
  { path: '**', component: NotfoundpageComponent }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
