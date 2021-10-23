import { Directive, ElementRef, HostListener, Input, OnInit, SimpleChanges, Optional } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import Inputmask from "inputmask";
import * as _ from  'underscore';
import { DecimalPipe } from '@angular/common';
@Directive({
  selector: '[appDecimalNumber]'
})
export class DecimalNumberDirective{
  mask: any ="floatWithTwoDecimalPlaces";
  @Input('restrictInputOptions')
  options: any;

  private regexMap: { [key: string]: string } = {
    'positive-integer': '^[0-9]*$',
    'float': '^[+-]?([0-9]*[.])?[0-9]+$',
    'positive-float': '^([0-9]*[.])?[0-9]+$',
    'amount': '^[+-]?([0-9]*[.])?[0-9]?[0-9]?$',
    'positive-amount': '^([0-9]*[.])?[0-9]?[0-9]?$',
    'words': '([A-z]*\\s)*',
    'integer': '^[0-9]*$',
    'floatWithThreeDecimalPlaces': '^[0-9]+(\[.][0-9][0-9][0-9]?)?$',
    'floatWithTwoDecimalPlaces': '^[0-9]+(\[.][0-9][0-9]?)?$',
    'point25': '^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$',
    'floatWithFiveDigitsTwoDecimalPlaces': '^[0-9]{1,5}(?:\[.][0-9]{1,2})?$',
    'alphanumericwithspace': '^[a-zA-Z0-9 ]+$',
    'alphanumeric': '^[a-zA-Z0-9][a-zA-Z0-9 ]+$',
    'alphanumericWithComma': '^[a-zA-Z0-9][a-zA-Z0-9 ,]+$',
    'floatWithFourDecimalPlacesRestrctFrstDgtZero': "^([1-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[.])?[0-9]?[0-9]?[0-9]?[0-9]?$",
    'floatWithSixDecimalPlacesRestrctFrstDgtZero': "^([1-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[.])?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?$",
    'wordsintegerspacehyphenMultiply': '^[a-zA-Z0-9 - *]*$',
    'wordsintegerspacehyphenMultiplyPlusDivideParenthesis': '^[a-zA-Z0-9 - * + / ()]+$',
    'json': '^[a-zA-Z0-9",{}:]*$',
    'formula': '^[a-zA-Z0-9-*+/().]+$',
  };


  constructor(
    private elementRef: ElementRef,
    @Optional() private control: NgControl, private DecimalPipe: DecimalPipe
  ) { }
  ngOnInit() {
   console.log("mask", this.mask);
    if (!this.mask) {
      this.mask = "floatWithTwoDecimalPlaces";
    }
    if (!this.control) {
      console.warn('No control for RestrictInputDirective');
      return;
    }

    if (this.mask) {
      let options: any = _.clone(this.options) || {};
      _.defaults(options, { showMaskOnHover: false, placeholder: '' });
      options.regex = this.regexMap[this.mask] || this.mask;
      options.onBeforeMask = (value:any, opts:any)=> {     
        return value;
      }
      options.onBeforeWrite = (event:any, buffer:any, caretPos:any, opts:any) => {
      };
      options.oncomplete = options.onincomplete = options.oncleared = () => this.handleChange();
      Inputmask(options).mask(this.elementRef.nativeElement);
    } else {
      
      Inputmask.remove(this.elementRef.nativeElement);
    }
  }

  @HostListener("blur")
  onBlur() {
    if (this.elementRef.nativeElement.value) {
      const abstractControl = this.control.control;
      abstractControl?.setValue(Number(this.elementRef.nativeElement.value).toFixed(2));
    }
  }

  private handleChange(): void {
    this.control.control?.patchValue(this.elementRef.nativeElement.value);
  }
}
