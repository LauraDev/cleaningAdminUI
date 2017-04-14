import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToOtherPage() {
    this.navCtrl.push(RegistrationPage);
  }

  goToOtherPage2() {
    this.navCtrl.push(LoginPage);
  }
}
