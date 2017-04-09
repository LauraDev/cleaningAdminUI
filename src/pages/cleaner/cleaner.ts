import { OnInit, Component, NgZone } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CouchbaseProvider } from "../../providers/couchbase-provider";
import { RegisteredPage } from '../registered/registered';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-cleaner',
  templateUrl: 'cleaner.html'
})
export class CleanerPage implements OnInit {

  public newCleaner: FormGroup;
  userInfo: {firstName: string, lastName: string, phone: string, number: string, street: string, postcode: string, city: string} = {firstName: '', lastName: '', phone: '', number: '', street:'', postcode:'', city: '' };


  public constructor(public navCtrl: NavController, 
                     public alertCtrl: AlertController, 
                     public couchbase: CouchbaseProvider, 
                     public zone: NgZone, 
                     public formBuilder: FormBuilder) 
  
{}

ngOnInit(): any {
      this.newCleaner = this.formBuilder.group ({
      'firstName': ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z -]*'), Validators.required])],
      'lastName': ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z -]*'), Validators.required])],
      'phone': ['', [this.phoneValidator.bind(this), Validators.compose([Validators.maxLength(10), Validators.required])]],
      'number': ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z0-9 /-]*'), Validators.required])],
      'street': ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z ,-/]*'), Validators.required])],
      'postcode': ['', Validators.compose([Validators.maxLength(7), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      'city': ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z -]*'), Validators.required])],
    });
  }

  onSubmit() {
     //TODO: remove this when we're done   dans .Html-> TODO: remove this: {{model.name}}
      console.log (this.newCleaner.value) ;
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
          console.log('A new cleaner has subscribed!');
          this.navCtrl.push(RegisteredPage);

       }
      }]      
    });
    alert.present();
}

  isValid(field: string) {
    let formField = this.newCleaner.get(field);
    return formField.valid || formField.pristine;
  }
  
   
  phoneValidator(control: FormControl): {[s: string]: boolean}{
    if (control.value !== ''){
      if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
        return {invalidPhone: true};
    }
  }
}  

}