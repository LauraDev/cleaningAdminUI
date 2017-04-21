import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';

import { ListPage } from '../pages/list/list';
import { DashBoardPage } from '../pages/dashBoard/dashBoard';
import { ModifInfosPage } from '../pages/modifInfos/modifInfos';
import { RegistrationPage } from '../pages/registration/registration';

import { ClassCleaner } from "../providers/dto/classCleaner";
import { ClassModify } from "../providers/dto/classModify";

import { FormValidation } from "../providers/util/formValidation";
import { ModifyValidation } from "../providers/util/modifyValidation";

import { AuthService } from "../providers/factory/authservice";
import { BackendWs } from "../providers/factory/backend-ws";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    ListPage,
    DashBoardPage,
    ModifInfosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    ListPage,
    DashBoardPage,
    ModifInfosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    BackendWs,
    FormValidation,
    ModifyValidation,
    ClassCleaner,
    ClassModify
  ],

})
export class AppModule {}
