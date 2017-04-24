import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Injectable()
export class FormValidation { 

newCleaner: any;
public constructor(public formBuilder: FormBuilder)
                    {
this.newCleaner = this.formBuilder.group({
  'firstName': ['', Validators.compose(
               [Validators.maxLength(30), 
               Validators.pattern('[a-zA-Z -]*'), 
               Validators.required])],

  'lastName': ['', Validators.compose(
              [Validators.maxLength(30), 
              Validators.pattern('[a-zA-Z -]*'), 
              Validators.required])],

  'phone': ['', Validators.compose(
           [Validators.minLength(10), 
           Validators.maxLength(10), 
           Validators.pattern('[0-9 -]*'), 
           Validators.required])],

  'email': ['', Validators.compose(
           [Validators.maxLength(50), 
           Validators.required])],
  
  'address': ['', Validators.required],

  'distance': ['', Validators.compose(
              [Validators.maxLength(30), 
              Validators.pattern('[0-9]*'), 
              Validators.required])],
     });
  }
}