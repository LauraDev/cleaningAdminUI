import { Injectable } from '@angular/core';
import { App, AlertController } from 'ionic-angular';
import { BackendWs } from "../../providers/factory/backend-ws";
import { ClassModify } from "../../providers/dto/classModify";
import { RegisteredPage } from '../../pages/registration-submitted/registered';
import 'rxjs/add/operator/map';

@Injectable()

export class AlertModify {
  
  public constructor(public backendWs: BackendWs,
                     public classModify: ClassModify,
                     public alertCtrl: AlertController,
                     protected app: App) { 
    }
  
  theAlert () {
    let alert = this.alertCtrl.create({
       title: 'Confirm Registration',
       message: 'Do you want to submit?',
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
            
      // 1- Send 'address' to get geocode
         // this.geocoding.sendAddress(JSON.stringify(this.dto.address)+CA&key=YOUR_API_KEY).then(
           //    data => {
           //     console.log(data);

           // 2- Get info from google map and send it to dto.allInfos
           //  this.geocoding.getGeocode(JSON.parse() => any) = this.dto.infos.(latitude , longitude)
                 
           // 3- Send all data to database
           this.backendWs.write(JSON.stringify(this.classModify.allInfos)).then(
             data => {
               console.log(data);
               this.app.getRootNav().push(RegisteredPage);
               },
             err => {
               console.log('Error writting to Ws')
               }
            );
          }
        }]
    })
    alert.present() 
  }
}