import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CouchbaseProvider } from "../../providers/couchbase-provider";
import { RegisteredPage } from '../registered/registered';

@Component({
  selector: 'page-cleaner',
  templateUrl: 'cleaner.html'
})
export class CleanerPage {

  public items: Array<string>;
 
  public constructor(public navCtrl: NavController, public alertCtrl: AlertController, public couchbase: CouchbaseProvider, public zone: NgZone) {
        this.items = [];
}
 
   workerConfirm($items) {
    let alert = this.alertCtrl.create({
    title: 'Confirm Registration',
    message: 'Do you want to submit your details?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirm',
        handler: () => {
          console.log('A new worker has subscribed');
          this.navCtrl.push(RegisteredPage);

        }
      }
    ]
  });
  alert.present();
}
   
}

