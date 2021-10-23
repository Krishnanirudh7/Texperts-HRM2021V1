import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TreeTableModule } from 'primeng/treetable';
import { FocusTrapModule } from 'primeng/focustrap';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    InputSwitchModule,
    CheckboxModule,
    AutoCompleteModule,
    ToastModule,
    CalendarModule,
    DropdownModule,
    TreeTableModule,
    FocusTrapModule,
    ButtonModule,
    SelectButtonModule
  ],
  providers: [MessageService],
  exports: [
    CommonModule,
    TableModule,
    InputSwitchModule,
    CheckboxModule,
    AutoCompleteModule,
    ToastModule,
    CalendarModule,
    DropdownModule,
    TreeTableModule,
    FocusTrapModule,
    ButtonModule,
    SelectButtonModule
  ]
})
export class PrimengModule { }
