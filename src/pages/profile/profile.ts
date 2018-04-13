import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; // ICI

import { HomePage } from '../home/home'; // On importe la Page d'accueil

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { // Et là
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  /**
  ** Cette fonction permet d'aller à la page d'accueil
  **/
  gotoHome() {
    this.navCtrl.push(HomePage, {
      un_parametre: 'Je suis un paramètre'
    });
  }

}
