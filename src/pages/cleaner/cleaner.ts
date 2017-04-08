import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CouchbaseProvider } from "../../providers/couchbase-provider";
import { RegisteredPage } from '../registered/registered';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'page-cleaner',
  templateUrl: 'cleaner.html'
})
export class CleanerPage {

  public Cleaner: Array<string>;
  public name: string;
  //public surname: string;
  //public address: Array<string>;
  //public phone: Array<string>;

  public constructor(public navCtrl: NavController, public alertCtrl: AlertController, public couchbase: CouchbaseProvider, public zone: NgZone) {
        this.Cleaner = [];

  }
 
workerConfirm() {
  console.log (this.Cleaner)
  this.navCtrl.push(RegisteredPage);
}
  //let alert = this.alertCtrl.create({
  //  title: 'Confirm Registration',
  //  message: 'Do you want to submit your details?',
  //  buttons: [
  //    {
  //      text: 'Cancel',
  //      role: 'cancel',
  //      handler: () => {
  //        console.log('Cancel clicked');
  //      }
  //    },
  //    {
  //      text: 'Confirm',
  //      handler: () => {
  //        console.log('A new cleaner has subscribed');
  //        this.navCtrl.push(RegisteredPage);

  //      }
  //    }
//    ]
//  });
//  alert.present();
// }
   
}