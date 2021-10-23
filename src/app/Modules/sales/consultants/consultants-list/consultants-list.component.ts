import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { ConsultantsService } from '../consultants.service';
import * as moment from 'moment/moment';
import { DecimalPipe } from '@angular/common';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-consultants-list',
  templateUrl: './consultants-list.component.html',
  styleUrls: ['./consultants-list.component.scss']
})
export class ConsultantsListComponent implements OnInit {
  consultantsList: any = [];
  refreshGrid: boolean = false
  totalRecords: number = 0;
  first: number = 1;
  rows: number = 10;
  loaders: any = {
    loadingConsultants: true
  }
  ConsultantColumnsList: any
  SearchString: String = "";
  constructor(private consultantsService: ConsultantsService, private messageService: MessageService, private DecimalPipe: DecimalPipe) {
    this.ConsultantColumnsList = [
      { field: 'FirstName', header: "Name", width: "", styleClass: ['text-left', 'text-truncate'] },
      { field: 'Skillset', header: "Skill", width: "5", styleClass: ['text-left', 'text-truncate'] },
      { field: 'Email', header: "Email", width: "", styleClass: ['text-left', 'text-truncate'] },
      { field: 'PhoneNumber', header: "Phone No", width: "", styleClass: ['text-left', 'text-truncate'] },
      { field: 'DOB', header: "D.O.B", width: "", styleClass: ['text-left', 'text-truncate'] },
      { field: 'VisaType', header: "Visa", width: "", styleClass: ['text-left', 'text-truncate'] },
      { field: 'ReferBy', header: "Recruiter", width: "5", styleClass: ['text-left', 'text-truncate'] },
      //{ field: 'USEntryDate', header: "Usa Entry", width: "", styleClass: ['text-left', 'text-truncate'] },
      { field: 'ExpectedRate', header: "Min. Pay($)", width: "", styleClass: ['text-right', 'text-truncate'], dStyleClass: ['justify-content-end'] }
    ];

  }

  ngOnInit(): void {
  }

  // Below method to Refresh the grid
  onrefresh() {
    this.refreshGrid = true
    setTimeout(() => {
      this.refreshGrid = false
    }, 200);
  }

  //  Below method to Get COnsultants List
  lazyLoadConsultants(event: LazyLoadEvent | any) {
    this.loaders.loadingConsultants = true;
    var obj = {
      "PageLength": event.rows,
      "PageStart": Math.round(event.first / event.rows) + 1,
      "SortDirection": (event.sortField == undefined || event.sortField == null || event.sortOrder == -1) ? 'asc' : 'desc',
      "SortColumn": event.sortField || "",
      "SearchParam": this.SearchString
    }
    this.consultantsService.getConsultants(obj).subscribe((response: any) => {
      if (response.Response.StatusCode == 200) {
        this.consultantsList = response.ConslList;
        if (this.consultantsList) {
          this.consultantsList.filter((record: any) => {
            record.DOB = moment(new Date(record.DOB)).format('DD-MM-YYYY');
            record.USEntryDate = moment(new Date(record.USEntryDate)).format('DD-MM-YYYY')
            record.ExpectedRate = (record.ExpectedRate) ? this.DecimalPipe.transform(record.ExpectedRate, '0.2-2') : '0.00'
          })
          this.totalRecords = response.TotalCount;
        }

      } else {
        this.messageService.add({ severity: 'error', summary: response.Response.Message });
      }
      this.loaders.loadingConsultants = false;
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: error });
      this.loaders.loadingConsultants = false;
    });
  }

  confirmToHotlist() {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to Move To Hot List?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Move It',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      focusCancel: true,
      confirmButtonColor: "#4fb29b",
      allowOutsideClick: false
    }).then((result: any) => {
      if (result.isConfirmed) {
      }
    });
  }

}
