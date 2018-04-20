import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DevisePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'devise',
})
export class DevisePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    debugger;
    return value.toLowerCase();
  }
}
