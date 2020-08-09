import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from '../pages/pages.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children:
          [
            { path: '', component: DashboardComponent, data:{title: 'Dashboard'} },
            {path:'graph1',component: Graph1Component, data:{title: 'Graph # 1'} },     
            {path:'progress',component: ProgressbarComponent, data:{title: 'Progress Bar'} }, 
            {path:'account-setting',component: AccountSettingComponent, data:{title: 'Temas'} }, 
            {path:'promise',component: PromisesComponent, data:{title: 'Promises'} }, 
            {path:'rxjs',component: RxjsComponent, data:{title: 'Rxjs'} },       
          ]
      },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
