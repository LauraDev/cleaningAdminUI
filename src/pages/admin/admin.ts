import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BackendWs} from "../../providers/factory/backend-ws";

import { ModifInfosPage } from '../modifInfos/modifInfos';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  allCleaners= new Array();
  cleaner: any;  

  constructor(public navCtrl: NavController,
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
  
  toogle(allCleaners) {
    //  console.log(event.target.id);
    let elementId: string = (event.target as Element).id;
      // console.log(elementId);      
      this.cleaner = this.allCleaners.find(allCleaners => 
                          allCleaners.uuid === elementId);

      this.navCtrl.push(ModifInfosPage, this.cleaner)   
    }
  }