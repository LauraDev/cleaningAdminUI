import { OnInit, Component, NgZone } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

import { BackendWs } from "../../providers/factory/backend-ws";
import { ListPage } from '../list/list';
import { ClassModify } from "../../providers/dto/classModify";
import { ModifyValidation } from "../../providers/util/modifyValidation";

declare var google;

@Component({
  selector: 'page-modifInfos',
  templateUrl: 'modifInfos.html'
})
export class ModifInfosPage implements OnInit {
  
  public Cleaners: FormGroup;
  public geocode: any; 
  public lat: string;
  public lng: string;

  public autocompleteItems;
  public address;
  public service = new google.maps.places.AutocompleteService();

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public backendWs: BackendWs,
              private zone: NgZone,
              public classModify: ClassModify,
              public modifyValidation: ModifyValidation,
              public navParams: NavParams,) 
              { 
                this.autocompleteItems = [];
                this.address = {query: ''};
              }

  ngOnInit(): any {
    this.Cleaners = this.modifyValidation.newCleaner;
    this.address.query = this.navParams.data.address;
    this.classModify.allInfos = this.navParams.data ;
  }
   
  isValid(field: string) {
    let formField = this.Cleaners.get(field);
    return formField.valid || formField.pristine;
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
  
  chooseItem(item: any) {
    this.address.query = item;
    this.classModify.allInfos.address = this.address.query;
    this.autocompleteItems = [];
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
             );
           }
         }, 
       ]
     })
   alert.present() 
  }
}