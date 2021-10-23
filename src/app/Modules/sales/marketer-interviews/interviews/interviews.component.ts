import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  totalRecords: number = 0
  first: number = 0
  ColumnsList: any = [
    { field: 'consultant', header: "Name", width: "", styleClass: ['text-left', 'text-truncate'] },
    { field: 'skill', header: "Skill", width: "", styleClass: ['text-left', 'text-truncate'] },
    { field: 'email', header: "Email", width: "", styleClass: ['text-left', 'text-truncate'] },
    { field: 'phoneNumber', header: "Phone Number", width: "", styleClass: ['text-left', 'text-truncate'] },
    { field: 'dob', header: "DOB", width: "", styleClass: ['text-left', 'text-truncate'] },
    { field: 'visa', header: "Visa", width: "", styleClass: ['text-left', 'text-truncate'] },
  ]

  constructor() { }
  hotList: any = [
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
    { consultant: "krishna", skill: "Angular", email: "Krishna@gmail.com", dob: "23/08/1994", phoneNumber: "9776553435", visa: "OPT" },
  ]
  ngOnInit(): void {
    this.hotList = this.hotList
  }

}
