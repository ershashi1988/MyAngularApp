import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomDir]'
})
export class MyCustomDirDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='yellow';
    this.el.nativeElement.style.color='red';
   }

}
