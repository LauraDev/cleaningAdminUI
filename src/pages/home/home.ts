import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/factory/authservice';

import { DashBoardPage } from '../dashBoard/dashBoard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: Loading;
  // registerCredentials = {email: '', password: ''};
  registerCredentials = {user: 'Admin', password: 'Password'}; 

  constructor(public navCtrl: NavController, 
              public storage: Storage,
              private auth: AuthService, 
              private alertCtrl: AlertController, 
              private loadingCtrl: LoadingController,
              ) {
                this.storage.set('user', this.registerCredentials.user);
              }

   public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        this.navCtrl.push(DashBoardPage, this.registerCredentials.user);
        });
      } else {
        this.showError("Access Denied");
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
