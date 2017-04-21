import { OnInit, Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

import { BackendWs } from "../../providers/factory/backend-ws";
import { ListPage } from '../list/list';
import { ClassModify } from "../../providers/dto/classModify";
import { ModifyValidation } from "../../providers/util/modifyValidation";
 
@Component({
  selector: 'page-modifInfos',
  templateUrl: 'modifInfos.html'
})
export class ModifInfosPage implements OnInit {
  
  public Cleaners: FormGroup;
  public geocode: any; 
  public lat: string;
  public lng: string;

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
            
             // 1- Send 'address' to WS (ask for geocodes)
             this.backendWs.goecReq(JSON.stringify(this.classModify.allInfos)).then(
               // 2- Get Geocodes
               data => {
                 if (data.length > 0){
                   //console.log('ok')
                   for (let infoAddr of data) {
                        this.geocode = infoAddr; 
                        this.lat = this.geocode.latitude; 
                        this.lng = this.geocode.longitude; 
               // 3- Set Latitute && Longitude in classModify
                          this.classModify.allInfos.latitude = this.lat;
                          this.classModify.allInfos.longitude = this.lng;
                   }
              //4- Send all datas to database             
                   this.backendWs.write(JSON.stringify(this.classModify.allInfos)).then(
                     data => {
                       //console.log(this.classCleaner.allInfos);
                       this.navCtrl.push(ListPage);
                     }
                   )
                 }
                 else {
                   //console.log('Invalid Address')
                   let alert = this.alertCtrl.create({
                     title: 'ERROR',
                     subTitle: 'Invalid Address',
                     buttons: ['OK']
                     });
                     alert.present(prompt);
                 }
               },
               err => {
                 console.log('error reading Ws')
               }
             );
           }
         }, 
       ]
     })
   alert.present() 
  }
}