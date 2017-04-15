import { OnInit, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

import { AlertModify } from "../../providers/factory/alertModify";
import { ClassModify } from "../../providers/dto/classModify";
import { ModifyValidation } from "../../providers/util/modifyValidation";

@Component({
  selector: 'page-modifInfos',
  templateUrl: 'modifInfos.html'
})
export class ModifInfosPage implements OnInit {
  
  public cleaner2modify: ClassModify = this.navParams.data;
  public Cleaners: FormGroup;
  
  constructor(public navCtrl: NavController,
              public alertModify: AlertModify,
              public classModify: ClassModify,
              public modifyValidation: ModifyValidation,
              public navParams: NavParams,) {
              }

  ngOnInit(): any {
   this.Cleaners = this.modifyValidation.newCleaner;
   //this.navParams.data = this.classModify.allInfos;
  } 

  isValid(field: string) {
    let formField = this.Cleaners.get(field);
    return formField.valid || formField.pristine;
  }
  
  onSubmit() {
    this.alertModify.theAlert() ;
    console.log(this.classModify.allInfos);
  }

  }
