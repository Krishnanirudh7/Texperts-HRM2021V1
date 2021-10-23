import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ConsultantsService } from '../consultants.service';
@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.scss']
})
export class AddConsultantComponent implements OnInit {
  generalCollapsed: boolean = false
  generalCollapsed1: boolean = false
  stateOptions: any = []
  value1: string = ""
  newConsultantForm: any = FormGroup
  constructor(private consultantsService: ConsultantsService, private DecimalPipe: DecimalPipe, private fb: FormBuilder) {
    this.newConsultantForm = this.fb.group({
      "FirstName": ["", [Validators.required]],
      "MiddleName": [""],
      "LastName": ["", [Validators.required]],
      "Email": ["", [Validators.required]],
      "PhoneNumber": ["", [Validators.required]],
      "AlternativeNumber": null,
      "SkypeId": ["", Validators.required],
      "DOB": ["", [Validators.required]],
      "SSN": ["", [Validators.required]],
      "PassportNumber": [""],
      "Address": ["", [Validators.required]],
      "City": ["", [Validators.required]],
      "State": [""],
      "Zipcode": [""],
      "SkillSet": ["", [Validators.required]],
      "MinPayrate": ["", [Validators.required]],
      "EducationQualif": [""],
      "Experience": [false],
      "ResidenceInGH": ["", [Validators.required]],
      "GHMovinDate": ["", [Validators.required]],
      "PreferRelocate": [false],
      "VisaStatus": [""],
      "VisaEntryDate": ["", [Validators.required]],
      "RecruitedBY": ["", [Validators.required]],
    });

    this.stateOptions = [{ label: 'No', value: 'N' }, { label: 'Yes', value: 'Y' }]
  }

  ngOnInit(): void {
  }

  ValidateandAddNewConsultant() {
    if (this.newConsultantForm.invalid) {
      this.consultantsService.validateAllFormFields(this.newConsultantForm);
      return true;
    } else {
      return false;
    }
  }
}
