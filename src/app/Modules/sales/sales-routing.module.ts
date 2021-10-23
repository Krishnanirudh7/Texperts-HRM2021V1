import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/AuthGuardService';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  {
    path: '', component: SalesComponent, children: [
      { path: '', redirectTo: 'marketer', pathMatch: 'full' },
      { path: 'marketer',canActivate : [AuthGuardService], loadChildren: () => import('./marketer-interviews/marketer-interviews.module').then(i => i.MarketerInterviewsModule) },
      { path: 'consultants',canActivate : [AuthGuardService], loadChildren: () => import('./consultants/consultants.module').then(i => i.ConsultantsModule) }
    ]
  },
  { path: '**', redirectTo: 'marketer', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
