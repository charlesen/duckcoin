import { Directive, ElementRef } from '@angular/core';

/**
 *  Directives.
 */
@Directive({
  selector: '[bolder]' // Attribute selector
})
export class BolderDirective {

  constructor(Element: ElementRef) {
    console.log('Hello bolderDirective Directive');
    console.log('Element :: ',Element);
  }

}
