import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantsRoutingModule } from './consultants-routing.module';
import { ConsultantsComponent } from '../consultants/consultants.component';
import { ConsultantsListComponent } from './consultants-list/consultants-list.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { DefaultModule } from '../../../shared-modules/default/default.module'
import { PrimengModule } from '../../../shared-modules/primeng/primeng.module';

@NgModule({
  declarations: [
    ConsultantsComponent,
    ConsultantsListComponent,
    AddConsultantComponent,
  ],
  imports: [
    CommonModule,
    ConsultantsRoutingModule,
    DefaultModule,
    PrimengModule
  ]
})
export class ConsultantsModule { }
