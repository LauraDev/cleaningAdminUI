import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-dashBoard',
  templateUrl: 'dashBoard.html'
})
export class DashBoardPage {
  
  public currentUser: string;
    
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage
              ) {
                this.storage.get('user').then((user) => {
                  this.currentUser = user
                })
              }

  
  goToOtherPage() {
    this.navCtrl.push(RegistrationPage);
  }

  goToOtherPage2() {
    this.navCtrl.push(ListPage);
  }
}
