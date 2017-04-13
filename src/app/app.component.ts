import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AuthService} from "../providers/authservice-provider";
import {BackendWs} from "../providers/backend-ws";
import {Geocoding} from "../providers/geocoding";

import { HomePage } from '../pages/home/home';

import {ClassCleaner} from "../dto/classCleaner";
import {FormValidation} from "../util/formValidation";


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
              classCleaner: ClassCleaner,
              backendWs: BackendWs) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
