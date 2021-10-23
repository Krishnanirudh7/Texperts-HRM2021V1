import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { ConsultantsListComponent } from './consultants-list/consultants-list.component';
import { ConsultantsComponent } from './consultants.component';

const routes: Routes = [
  {
    path: '', component: ConsultantsComponent, children: [
      { path: '', redirectTo: 'manageconsultants', pathMatch: 'full' },
      { path: 'manageconsultants',component: ConsultantsListComponent },
      { path: 'addconsultant',component: AddConsultantComponent },
    ]
  },
  { path: '**', redirectTo: 'consultants', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantsRoutingModule { }
