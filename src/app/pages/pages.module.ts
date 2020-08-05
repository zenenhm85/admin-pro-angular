import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {PagesComponent} from './pages.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graph1Component,
    ProgressbarComponent,
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    Graph1Component,
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    
    SharedModule,
    AppRoutingModule,
    ComponentsModule    
  ]
})
export class PagesModule { }
