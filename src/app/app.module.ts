import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CleanerPage } from '../pages/cleaner/cleaner';
import { AdminPage } from '../pages/admin/admin';
import { RegisteredPage } from '../pages/registered/registered';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CouchbaseProvider } from "../providers/couchbase-provider";
import { AuthService } from "../providers/authservice-provider";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CleanerPage,
    AdminPage,
    RegisteredPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CleanerPage,
    AdminPage,
    RegisteredPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    CouchbaseProvider, 
    AuthService
  ]
})
export class AppModule {}
