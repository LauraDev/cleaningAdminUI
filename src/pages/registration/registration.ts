import { OnInit, Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

import { BackendWs } from "../../providers/factory/backend-ws";
import { RegisteredPage } from '../registration-submitted/registered';
import { ClassCleaner } from "../../providers/dto/classCleaner";
import { FormValidation } from "../../providers/util/formValidation";

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage implements OnInit{

public Cleaners: FormGroup;
public cleaner: any;
public geocode: any; 
public lat: string;
public lng: string;

public constructor(public navCtrl: NavController,
                   public alertCtrl: AlertController,
                   public backendWs: BackendWs,
                   public classCleaner: ClassCleaner,
                   public formValidation: FormValidation)
                     {
  }
  
  ngOnInit(): any {
   this.Cleaners = this.formValidation.newCleaner;
   this.cleaner = this.classCleaner.allInfos;
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
            
             // 1- Send 'address' to WS (ask for geocodes)
             this.backendWs.goecReq(JSON.stringify(this.classCleaner.allInfos)).then(
               // 2- Get Geocodes
               data => {
                 for (let infoAddr of data) {
                        this.geocode = infoAddr; 
                        this.lat = this.geocode.latitude; 
                        this.lng = this.geocode.longitude; 
               // 3- Set Latitute && Longitude in classModify
                          this.classCleaner.allInfos.latitude = this.lat;
                          this.classCleaner.allInfos.longitude = this.lng;
                        //console.log(JSON.stringify(this.classCleaner.allInfos));
             //4- Send all datas to database             
             this.backendWs.write(JSON.stringify(this.classCleaner.allInfos)).then(
               data => {
                 //console.log(this.classCleaner.allInfos);
                 this.navCtrl.push(RegisteredPage);
               }
             )
                 }
                 err => {
                   console.log('Error reading to Ws')
                }
               }, 
             );
           }
        }]
    })
    alert.present() 
  }
}