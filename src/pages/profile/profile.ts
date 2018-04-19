import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; // ICI

import { HomePage } from '../home/home'; // On importe la Page d'accueil

import { TabsPage } from '../tabs/tabs'; // On importe le Tab

// TabsPage

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
    this.navCtrl.setRoot(TabsPage, {
      un_parametre: 'Je suis un paramètre'
    });
  }

}
