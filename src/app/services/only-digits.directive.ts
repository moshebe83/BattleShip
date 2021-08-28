import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyDigits]'
})

export class OnlyDigitsDirective {
  private prevValue: number | undefined;

  constructor(private elRef: ElementRef, private control: NgControl) { }

  @HostListener('input') onInputChange() {
    const initalValue = this.elRef.nativeElement.value;
    const control: AbstractControl | null = this.control.control;

    if (!initalValue) {
      this.elRef.nativeElement.value = '';
    }
    else if (initalValue.startsWith(0) || initalValue < 1 || initalValue > 999) {
      this.elRef.nativeElement.value = this.prevValue;
      control?.setValue(this.prevValue);
    }

    this.prevValue = this.elRef.nativeElement.value;

  }

}
