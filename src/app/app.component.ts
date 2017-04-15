import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from "../providers/factory/authservice";
import { BackendWs } from "../providers/factory/backend-ws";
import { Geocoding } from "../providers/factory/geocoding";
import { AlertRegistration } from '../providers/factory/alertRegistration'
import { AlertModify } from '../providers/factory/alertModify'
import { ClassCleaner } from "../providers/dto/classCleaner";
import { ClassModify } from "../providers/dto/classModify";
import { FormValidation } from "../providers/util/formValidation";
import { ModifyValidation } from "../providers/util/modifyValidation";

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              authService: AuthService,
              geocoding: Geocoding, 
              formValidation: FormValidation,
              modifyValidation: ModifyValidation,
              classCleaner: ClassCleaner,
              classModify: ClassModify,
              alertRegistration : AlertRegistration,
              alertModify: AlertModify,
              backendWs: BackendWs) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
