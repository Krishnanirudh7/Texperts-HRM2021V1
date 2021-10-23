import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { TexpertsHttpService} from '../../../services/texperts-http.service';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {
  constructor(private TexpertsHttpService: TexpertsHttpService,private http: HttpClient ) {
  
  }
    getConsultants(param:any) {
      return this.TexpertsHttpService.post(`/Sales/GetConslInfo/`,param)
    }
    validateAllFormFields(formGroup: FormGroup) {         //{1}
      Object.keys(formGroup.controls).forEach(field => {  //{2}
        const control = formGroup.get(field);             //{3}
        if (control instanceof FormControl) {             //{4}
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        //{5}
          this.validateAllFormFields(control);            //{6}
        }
      });
    }
  }
