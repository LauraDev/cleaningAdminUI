import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { BackendWs} from "../../providers/factory/backend-ws";

import { ModifInfosPage } from '../modifInfos/modifInfos';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  allCleaners= new Array();
  cleaner: any;  

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private backendWs: BackendWs) {
    // console.log(backendWs.list());

    this.backendWs.list().then(
      data => {
        for (let cleaner of data) {
          let realcleaner = cleaner as any;
          this.allCleaners.push(realcleaner.cleaning)
            // console.log(cleaner);
            
        }
            },
      err => {
        console.log('Error reading to Ws')
      }
    );
  }
  
  goToOtherPage() {
    this.navCtrl.push(RegistrationPage);
  }
  
  edit(allCleaner) {
         
   this.cleaner = this.allCleaners.find(allCleaners => 
     allCleaners.uuid === allCleaner.uuid);

   this.navCtrl.push(ModifInfosPage, this.cleaner)
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
             
//              this.cleaner = this.allCleaners.find(allCleaners => 
//                              allCleaners.uuid === allCleaner.uuid);
  console.log(allCleaner.uuid),
              this.backendWs.dash(allCleaner.uuid).then(
                data => {
                  console.log(data),
                err => {
                  console.log('Error writting to Ws')
                }
                           
       })}}]
     })
     alert.present() 
   }
 }


// this.allCleaners.splice(this.allCleaners.findIndex(
//                allCleaners => 
//                allCleaners.uuid === allCleaner.uuid
//              )
   