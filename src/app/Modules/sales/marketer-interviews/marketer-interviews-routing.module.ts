import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewsComponent } from './interviews/interviews.component';
import { MarketerAdminOverviewComponent } from './marketer-admin-overview/marketer-admin-overview.component';
import { MarketerInterviewsComponent } from './marketer-interviews.component';
import { MarketerOverviewComponent } from './marketer-overview/marketer-overview.component';
import { SchedulerMenuComponent } from './scheduler/scheduler-menu/scheduler-menu.component';

const routes: Routes = [
  {
    path: '', component: MarketerInterviewsComponent, children: [
      { path: '', redirectTo: 'scheduler', pathMatch: 'full' },
      { path: 'scheduler',component: SchedulerMenuComponent },
      { path: 'Interviews',component:  InterviewsComponent},
      { path: 'overview',component: MarketerOverviewComponent },
      { path: 'adminoverview',component: MarketerAdminOverviewComponent },
    ]
  },
  { path: '**', redirectTo: 'scheduler', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketerInterviewsRoutingModule { }
