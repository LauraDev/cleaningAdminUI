import { OnInit, Component, NgZone } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

import { BackendWs } from "../../providers/factory/backend-ws";
import { DashBoardPage } from '../dashBoard/dashBoard';
import { ClassCleaner } from "../../providers/dto/classCleaner";
import { FormValidation } from "../../providers/util/formValidation";

declare var google;

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

public autocompleteItems;
public address;
public service = new google.maps.places.AutocompleteService();

public constructor(public navCtrl: NavController,
                   public alertCtrl: AlertController,
                   public backendWs: BackendWs,
                   private zone: NgZone,
                   public classCleaner: ClassCleaner,
                   public formValidation: FormValidation)
                     {
                       this.autocompleteItems = [];
                       this.address = {query: ''};
                     }
  
  ngOnInit(): any {
   this.Cleaners = this.formValidation.newCleaner;
   this.cleaner = this.classCleaner.allInfos;
   this.address.query = this.classCleaner.allInfos.address;
  } 

  isValid(field: string) {
    let formField = this.Cleaners.get(field);
    return formField.valid || formField.pristine;
  }

  chooseItem(item: any) {
    this.address.query = item;
    console.log(this.address);
    this.classCleaner.allInfos.address = this.address.query;
    this.autocompleteItems = [];
  }
  
  updateSearch() {
    if (this.address.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let list = this;
    this.service.getPlacePredictions({ input: this.address.query, 
                                       componentRestrictions: {country: 'CA'} }, 
                                       function (predictions, status) {
      list.autocompleteItems = []; 
      list.zone.run(function () {
        predictions.forEach(function (prediction) {
          list.autocompleteItems.push(prediction.description);
        });
      });
    });
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
             this.backendWs.goecReq(JSON.stringify(this.address)).then(
               // 2- Get Geocodes
               data => {
                 if (data.length > 0){
                   //console.log('ok')
                   for (let infoAddr of data) {
                        this.geocode = infoAddr; 
                        this.lat = this.geocode.latitude; 
                        this.lng = this.geocode.longitude; 
               // 3- Set Latitute && Longitude in classModify
                          this.classCleaner.allInfos.latitude = this.lat;
                          this.classCleaner.allInfos.longitude = this.lng;
                   }
              //4- Send all datas to database             
                   this.backendWs.write(JSON.stringify(this.classCleaner.allInfos)).then(
                     data => {
                       //console.log(this.classCleaner.allInfos);
                       this.navCtrl.push(DashBoardPage);
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
             );
           }
         }, 
       ]
     })
   alert.present() 
  }
}