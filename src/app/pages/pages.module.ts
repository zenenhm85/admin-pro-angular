import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {PagesComponent} from './pages.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graph1Component
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    Graph1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
