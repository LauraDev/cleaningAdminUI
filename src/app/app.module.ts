import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { AdminPage } from '../pages/admin/admin';
import { LoginPage } from '../pages/login/login';
import { ModifInfosPage } from '../pages/modifInfos/modifInfos';
import { RegistrationPage } from '../pages/registration/registration';
import { RegisteredPage } from '../pages/registration-submitted/registered';

import { ClassCleaner } from "../providers/dto/classCleaner";
import { ClassModify } from "../providers/dto/classModify";

import { FormValidation } from "../providers/util/formValidation";
import { ModifyValidation } from "../providers/util/modifyValidation";

import { AuthService } from "../providers/factory/authservice";
import { BackendWs } from "../providers/factory/backend-ws";
import { Geocoding } from "../providers/factory/geocoding";
import { AlertRegistration } from '../providers/factory/alertRegistration'
import { AlertModify } from '../providers/factory/alertModify'

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
    ModifyValidation,
    ClassCleaner,
    ClassModify,
    AlertRegistration,
    AlertModify
  ],
  


})
export class AppModule {}
