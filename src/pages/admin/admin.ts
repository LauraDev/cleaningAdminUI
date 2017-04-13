import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {BackendWs} from "../../providers/backend-ws";

import { ModifInfosPage } from '../modifInfos/modifInfos';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {
  allCleaners= new Array();

  constructor(public navCtrl: NavController,
              private backendWs: BackendWs) {
    // console.log(backendWs.list());

    this.backendWs.list().then(
      data => {
        for (let cleaner of data) {
          let realcleaner = cleaner as any;
          this.allCleaners.push(realcleaner.cleaning)

        }
      console.log(this.allCleaners);
      },
      err => {
        console.log('Error reading to Ws')
      }
    );
  }
  
  goToOtherPage3() {
      this.navCtrl.push(ModifInfosPage);
  }
}