import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyDigits]'
})

export class OnlyDigitsDirective {
  private prevValue: number | undefined;

  constructor(private elRef: ElementRef) { }

  @HostListener('input') onInputChange() {
    const initalValue = this.elRef.nativeElement.value;

    if (!initalValue) {
      this.elRef.nativeElement.value = '';
    }
    else if (initalValue.startsWith(0) || initalValue < 1 || initalValue > 99) {
      this.elRef.nativeElement.value = this.prevValue;
    }

    this.prevValue = this.elRef.nativeElement.value;
  }

}
