import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DuckCoinApp } from './app.component';

//Modules
import {ComponentsModule} from '../components/components.module';
import {DirectivesModule} from '../directives/directives.module';
import {PipesModule} from '../pipes/pipes.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { MiningPage } from '../pages/mining/mining';
import { WalletPage } from '../pages/wallet/wallet';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile'; // On importe la nouvelle page ICI
import { SettingPage } from '../pages/setting/setting'; // On importe la nouvelle page ICI
import { TabsPage } from '../pages/tabs/tabs';
import {ModalPage} from '../pages/home/modal/modal';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { DckProvider } from '../providers/dck/dck';

@NgModule({
  declarations: [
    DuckCoinApp,
    MiningPage,
    WalletPage,
    HomePage,
    SettingPage,
    ProfilePage, // On la déclare ici
    TabsPage,
    ModalPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    DirectivesModule,
    IonicModule.forRoot(DuckCoinApp,{
        // tabsPlacement: 'top',
        backButtonText: 'Retour'
    }),
    IonicStorageModule.forRoot({
      name: '__duckcoindb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DuckCoinApp,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    DckProvider
  ]
})
export class AppModule {}
