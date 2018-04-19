import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
  transaction: any;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.transaction = this.params.get('transaction');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
