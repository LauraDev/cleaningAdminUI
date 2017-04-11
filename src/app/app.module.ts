import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { RegistrationPage } from '../pages/registration/registration';
import { AdminPage } from '../pages/admin/admin';
import { RegisteredPage } from '../pages/registration-submitted/registered';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from "../providers/authservice-provider";
import { BackendWs } from "../providers/backend-ws";
import { DTO } from "../providers/dto";
import { Util } from "../providers/util";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
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
    RegistrationPage,
    AdminPage,
    RegisteredPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    BackendWs,
    DTO,
    Util
  ]
})
export class AppModule {}
