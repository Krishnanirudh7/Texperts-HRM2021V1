import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from '../sales/sales.component';
@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    RouterModule
  ]
})
export class SalesModule { }
