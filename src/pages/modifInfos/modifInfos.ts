import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClassCleaner } from "../../providers/dto/classCleaner";

@Component({
  selector: 'page-modifInfos',
  templateUrl: 'modifInfos.html'
})
export class ModifInfosPage {
  
  cleaner2modify = this.navParams;
  
  constructor(public navCtrl: NavController,
              public classCleaner: ClassCleaner,
              public navParams: NavParams,) {
  
  //this.cleaner2modify = classCleaner.allInfos;
  //this.cleaner2modify = this.navParams;

    console.log(this.cleaner2modify); 
              }    
}