import { Component } from '@angular/core';

/**
 * Generated class for the TransactionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transaction',
  templateUrl: 'transaction.html'
})
export class TransactionComponent {

  text: string;

  constructor() {
    console.log('Hello TransactionComponent Component');
    this.text = 'Hello World';
  }

}
