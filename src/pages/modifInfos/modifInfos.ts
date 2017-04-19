import { OnInit, Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

import { BackendWs } from "../../providers/factory/backend-ws";
import { AdminPage } from '../admin/admin';
import { ClassModify } from "../../providers/dto/classModify";
import { ModifyValidation } from "../../providers/util/modifyValidation";
 
@Component({
  selector: 'page-modifInfos',
  templateUrl: 'modifInfos.html'
})
export class ModifInfosPage implements OnInit {
  
  public Cleaners: FormGroup;
   
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public formBuilder: FormBuilder,
              public backendWs: BackendWs,
              public classModify: ClassModify,
              public modifyValidation: ModifyValidation,
              public navParams: NavParams,) {
              }

  ngOnInit(): any {
    this.classModify.allInfos = this.navParams.data ;
    this.Cleaners = this.modifyValidation.newCleaner;
  }
   
  isValid(field: string) {
    let formField = this.Cleaners.get(field);
    return formField.valid || formField.pristine;
  }
  
  onSubmit() {
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
             console.log(JSON.stringify(
               this.classModify.allInfos.number + ' ' +
               this.classModify.allInfos.street +  ' ' +
               this.classModify.allInfos.city +  ' ' +
               this.classModify.allInfos.postcode)); 
      // 1- Send 'address' to WS (ask for geocodes)
             this.backendWs.goecReq(JSON.stringify(this.classModify.address)).then(
               data => {
                 console.log(JSON.stringify(data)); 
              }
             );   
         //    data => {
            //      for (let geocode of data) {
            //        let realcleaner = geocode as any;
            //        //this.classModify.allInfos.latitude = geocode.latitude;
                   //this.classModify.allInfos.longitude = geocode.longitude;
                   //console.log(this.classModify.allInfos.latitude);
                   //console.log(this.classModify.allInfos.longitude);
            //      }
            //    },
            //    err => {
            //      console.log('Error reading to Ws')
            //    }
            //  );
  
      // 3- Send all data to database
             this.backendWs.write(JSON.stringify(this.classModify.allInfos)).then(
               data => {
                 console.log(data);
                 this.navCtrl.push(AdminPage);
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
