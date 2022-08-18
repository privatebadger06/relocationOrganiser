import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports:[
    HomeComponent,
    DashboardComponent,
    TaskComponent
  ]
})
export class PageModule { }
