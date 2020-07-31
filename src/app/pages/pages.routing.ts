import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from '../pages/pages.component';


const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children:
          [
            { path: '', component: DashboardComponent },
            {path:'graph1',component: Graph1Component},            
          ]
      },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
