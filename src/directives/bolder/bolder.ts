import { Directive, ElementRef } from '@angular/core';

/**
 *  Directives.
 */
@Directive({
  selector: '[bolder]' // Attribute selector
})
export class BolderDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.style.fontWeight = 'bolder';
  }

}
