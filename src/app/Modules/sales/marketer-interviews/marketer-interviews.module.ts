import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketerInterviewsRoutingModule } from './marketer-interviews-routing.module';
import { MarketerInterviewsComponent } from './marketer-interviews.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { MarketerOverviewComponent } from './marketer-overview/marketer-overview.component';
import { MarketerAdminOverviewComponent } from './marketer-admin-overview/marketer-admin-overview.component';
import { SchedulerMenuComponent } from './scheduler/scheduler-menu/scheduler-menu.component';
import { ScheduledListComponent } from './scheduler/scheduled-list/scheduled-list.component';
import { HotListComponent } from './scheduler/hot-list/hot-list.component';
import { DefaultModule } from '../../../shared-modules/default/default.module'
import { PrimengModule } from '../../../shared-modules/primeng/primeng.module';
@NgModule({
  declarations: [
    MarketerInterviewsComponent,
    SchedulerComponent,
    InterviewsComponent,
    MarketerOverviewComponent,
    MarketerAdminOverviewComponent,
    SchedulerMenuComponent,
    ScheduledListComponent,
    HotListComponent
  ],
  imports: [
    CommonModule,
    MarketerInterviewsRoutingModule,
    DefaultModule,
    PrimengModule
  ]
})
export class MarketerInterviewsModule { }
