import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-registered',
  templateUrl: 'registered.html'
})
export class RegisteredPage {

  constructor(public navCtrl: NavController) {
  }

goToOtherPage2() {
    this.navCtrl.push(LoginPage);
  }
}