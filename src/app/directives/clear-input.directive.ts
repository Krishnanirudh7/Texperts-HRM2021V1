import { Directive, ElementRef, HostListener, Input, OnInit, SimpleChanges, Inject, Renderer2, Optional, EventEmitter, Output } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[clearInput]'
})
export class ClearInputDirective {
  child!: HTMLElement;
  @Output() onInputClear = new EventEmitter<any>();
  @Input() disabled: boolean = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2, @Optional() private control: NgControl,) { }
  ngOnInit() {


    this.child = document.createElement('i');
    this.child.className = "fa fa-times-circle clear-input-btn";
    this.elementRef.nativeElement.after(this.child);

    this.child.addEventListener("click", (e) => {
      e.stopPropagation();
      // console.log(this.elementRef.nativeElement.value);
      if (this.control) {
        // console.log("controll", Array.isArray(this.control.value  ));
        const abstractControl = this.control.control;
        (Array.isArray(this.control.value)) ? abstractControl?.setValue([]) : abstractControl?.setValue('')
        // abstractControl.setValue('');
        abstractControl?.markAsTouched({ onlySelf: true });
      }
      else {
        //console.log("no controllll");
        this.elementRef.nativeElement.value = '';
      }
      this.onInputClear.emit('');
    });

  }

  public ngDoCheck() {
    if (this.control) {
      const abstractControl = this.control.control;
      //console.log(abstractControl.disabled);
      if (abstractControl?.value && !this.disabled) {
        this.child.hidden = false;
      } else {
        this.child.hidden = true;;
      }
    } else {
      if (this.elementRef.nativeElement.value) {
        this.child.hidden = false;
      } else {
        this.child.hidden = true;;
      }
    }
  }
}
