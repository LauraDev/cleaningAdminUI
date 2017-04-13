import {OnInit, Component, NgZone} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';

import {BackendWs} from "../../providers/backend-ws";
import {ClassCleaner} from "../../dto/classCleaner";
import {FormValidation} from "../../util/formValidation";
//import {Geocoding} from "../../providers/geocoding";

import {RegisteredPage} from '../registration-submitted/registered';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage implements OnInit{

public Cleaners: FormGroup;

public constructor(public navCtrl: NavController,
                     public alertCtrl: AlertController,
                     private backendWs: BackendWs,
                     public zone: NgZone,
                     public formBuilder: FormBuilder,
                     public classCleaner: ClassCleaner,
                   //public geocoding: Geocoding)
                     public formValidation: FormValidation)
                     {
  }
  
  ngOnInit(): any {
   this.Cleaners = this.formValidation.newCleaner;
  } 

 isValid(field: string) {
    let formField = this.Cleaners.get(field);
    return formField.valid || formField.pristine;
  }
  
 onSubmit() {
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
            
      // 1- Send 'address' to get geocode
         // this.geocoding.sendAddress(JSON.stringify(this.dto.address)+CA&key=YOUR_API_KEY).then(
           //    data => {
           //     console.log(data);

           // 2- Get info from google map and send it to dto.allInfos
           //  this.geocoding.getGeocode(JSON.parse() => any) = this.dto.infos.(latitude , longitude)
                 
           // 3- Send all data to database
     this.backendWs.write(JSON.stringify(this.classCleaner.allInfos)).then(
              data => {
                console.log(data);
                this.navCtrl.push(RegisteredPage);
              },
              err => {
                console.log('Error writting to Ws')
              }
            );
          }
        }]
    });
    alert.present();
  }
}