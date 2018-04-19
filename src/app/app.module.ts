import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Composants
import {TransactionComponent} from '../components/components';

import { MiningPage } from '../pages/mining/mining';
import { WalletPage } from '../pages/wallet/wallet';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile'; // On importe la nouvelle page ICI
import { SettingPage } from '../pages/setting/setting'; // On importe la nouvelle page ICI
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MiningPage,
    WalletPage,
    HomePage,
    SettingPage,
    ProfilePage, // On la déclare ici
    TabsPage,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        // tabsPlacement: 'top',
        backButtonText: 'Retour'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MiningPage,
    WalletPage,
    HomePage,
    SettingPage,
    ProfilePage, // Et là
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
