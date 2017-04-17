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
 public StatusSelection: FormGroup;
  
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public formBuilder: FormBuilder,
              public backendWs: BackendWs,
              public classModify: ClassModify,
              public modifyValidation: ModifyValidation,
              public navParams: NavParams,) {
              }

  // changeStatus(){
  //   let value = this.navParams.data.status;
  // }

  ngOnInit(): any {
    this.classModify.allInfos = this.navParams.data ;
    this.Cleaners = this.modifyValidation.newCleaner;
  //   this.StatusSelection = this.formBuilder.group({
  //     'status': [''] }) 
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
