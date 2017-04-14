import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { RegistrationPage } from '../pages/registration/registration';
import { AdminPage } from '../pages/admin/admin';
import { RegisteredPage } from '../pages/registration-submitted/registered';
import { LoginPage } from '../pages/login/login';
import { ModifInfosPage } from '../pages/modifInfos/modifInfos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from "../providers/factory/authservice";
import { BackendWs } from "../providers/factory/backend-ws";
import { Geocoding } from "../providers/factory/geocoding";
import { AlertRegistration } from '../providers/factory/alertRegistration'
import { ClassCleaner } from "../providers/dto/classCleaner";
import { FormValidation } from "../providers/util/formValidation";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    AdminPage,
    RegisteredPage,
    LoginPage,
    ModifInfosPage
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
    LoginPage,
    ModifInfosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    BackendWs,
    Geocoding,
    FormValidation,
    ClassCleaner,
    AlertRegistration
  ],
  


})
export class AppModule {}
