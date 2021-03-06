import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {PagesComponent} from './pages.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graph1Component,
    ProgressbarComponent,
    AccountSettingComponent,
    PromisesComponent,
    RxjsComponent,
    PerfilComponent,
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    Graph1Component,
    ProgressbarComponent,
    AccountSettingComponent,
    PromisesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,        
    SharedModule,
    AppRoutingModule,
    ComponentsModule    
  ]
})
export class PagesModule { }
