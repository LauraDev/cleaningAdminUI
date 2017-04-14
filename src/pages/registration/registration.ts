import { OnInit, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

import { AlertRegistration } from "../../providers/factory/alertRegistration";
import { ClassCleaner } from "../../providers/dto/classCleaner";
import { FormValidation } from "../../providers/util/formValidation";

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage implements OnInit{

public Cleaners: FormGroup;

public constructor(public navCtrl: NavController,
                   public alertRegistration: AlertRegistration,
                   public classCleaner: ClassCleaner,
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
    this.alertRegistration.theAlert() ;
  }
}