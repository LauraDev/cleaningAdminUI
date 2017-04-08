import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CleanerPage } from '../cleaner/cleaner';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  
 goToOtherPage() {
    this.navCtrl.push(CleanerPage);
  }

  goToOtherPage2() {
    this.navCtrl.push(LoginPage);
  }
}