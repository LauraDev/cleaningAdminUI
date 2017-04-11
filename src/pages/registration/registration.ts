import {OnInit, Component, NgZone} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';

import {BackendWs} from "../../providers/backend-ws";
import {DTO} from "../../providers/dto";
import {Util} from "../../providers/util";

import {RegisteredPage} from '../registration-submitted/registered';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage implements OnInit{

public Cleaners: FormGroup;
  // DELETE USERINFO AND KEEP THE FOLLOWING LINE WHEN READY
  //userInfo: DTO[] = [];

userInfo: {firstName: string, lastName: string, phone: string, email: string, number: string, street: string, postcode: string, city: string, uuid: string, status: number, latitude: string, longitude: string, distance: number } = {
    firstName: 'Lucas',
    lastName: 'Traore',
    phone: '6132408882',
    email: 'asd@mail.com',
    number: '213',
    street: 'Laso',
    postcode: 'weq',
    city: 'ewq',
    uuid: 'UUID.UUID()',
    status: 0,
    latitude: '',
    longitude: '',
    distance: 5
  };
  
  public constructor(public navCtrl: NavController,
                     public alertCtrl: AlertController,
                     private backendWs: BackendWs,
                     public zone: NgZone,
                     public formBuilder: FormBuilder,
                     public util: Util)
                     {
  }
  
  ngOnInit(): any {
   this.Cleaners = this.util.newCleaner;
  } 

 isValid(field: string) {
    let formField = this.Cleaners.get(field);
    return formField.valid || formField.pristine;
  }
  
  
  onSubmit() {
    //TODO: remove this when we're done   dans .Html-> TODO: remove this: {{model.name}}
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
            console.log(this.userInfo);

            this.backendWs.write(JSON.stringify(this.userInfo)).then(
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