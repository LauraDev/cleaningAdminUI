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
export class ModifInfosPage {
  
  public cleaner2modify = this.navParams;
  public Cleaners: FormGroup;


  constructor(public navCtrl: NavController,
              public alertModify: AlertModify,
              public classModify: ClassModify,
              public modifyValidation: ModifyValidation,
              public navParams: NavParams,) {
  
   // this.cleaner2modify = this.navParams;
   // console.log(this.classCleaner.data); 

                  }  

  

  ngOnInit(): any {
   this.Cleaners = this.modifyValidation.newCleaner;
  } 

  isValid(field: string) {
    let formField = this.Cleaners.get(field);
    return formField.valid || formField.pristine;
  }
  
  onSubmit() {
    this.alertModify.theAlert() ;
  }

  }
