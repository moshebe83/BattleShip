import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyDigits]'
})

export class OnlyDigitsDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initalValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initalValue.replace(/[^1-9]*/g, '');

    if (initalValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
