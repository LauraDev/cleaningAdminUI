import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


@Injectable()
export class Util { 

newCleaner: any;
public constructor(public formBuilder: FormBuilder)
                    {

                    

this.newCleaner = this.formBuilder.group({
      'firstName': ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z -]*'), Validators.required])],
      'lastName': ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z -]*'), Validators.required])],
      'phone': ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9 -]*'), Validators.required])],
      'number': ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z0-9 /-]*'), Validators.required])],
      'street': ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z ,-/]*'), Validators.required])],
      'postcode': ['', Validators.compose([Validators.maxLength(7), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      'city': ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z -]*'), Validators.required])],
      'email': ['', Validators.compose([Validators.maxLength(50), Validators.required])],
      'distance': ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9]*'), Validators.required])],
     });
  }
}