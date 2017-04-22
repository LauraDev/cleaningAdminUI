import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { BackendWs} from "../../providers/factory/backend-ws";

import { ModifInfosPage } from '../modifInfos/modifInfos';
import { DashBoardPage } from '../dashBoard/dashBoard';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  allCleaners= new Array();
  
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private backendWs: BackendWs) 
              
  { this.backendWs.list().then(
      data => {
        for (let cleaner of data) {
          let realcleaner = cleaner as any;
          this.allCleaners.push(realcleaner.cleaning)
        }
      },
    )
  }
  
  goToOtherPage() {
    this.navCtrl.push(RegistrationPage);
  }
  goToOtherPage3() {
    this.navCtrl.push(DashBoardPage);
  }
  
  edit(allCleaner) {
    this.navCtrl.push(ModifInfosPage, allCleaner)
  }   

  dash(allCleaner) {
    let alert = this.alertCtrl.create({
      title: 'DELETE',
      message: 'Do you really want to DELETE this contact?',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          this.backendWs.dash(JSON.stringify(allCleaner)).then(
            data => {
              this.navCtrl.push(ListPage); 
            }
          )
        }
      }]
    })
    alert.present() 
   }
 }