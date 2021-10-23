import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { DecimalNumberDirective } from '../../directives/decimal-number.directive';
//import { RestrictWhiteSpaceDirective } from '../../directives/restrict-white-space.directive';
import { ClearInputDirective } from '../../directives/clear-input.directive';
@NgModule({
  declarations: [DecimalNumberDirective, ClearInputDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    NgSlimScrollModule
  ],
  providers: [DecimalPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DecimalNumberDirective,
    ClearInputDirective,
    OrderModule,
    NgSlimScrollModule
  ]
})
export class DefaultModule { }
