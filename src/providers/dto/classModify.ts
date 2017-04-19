import { Injectable } from '@angular/core';

@Injectable()

export class ClassModify {
    
  infos: { uuid: string,
           firstName: string, 
           lastName: string, 
           phone: string, 
           email: string,
           latitude: string, 
           longitude: string, 
           distance: string,
           status: string, } = {
    uuid: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    latitude: '',
    longitude: '',
    distance: '',
    status: '',
   };

   address: { number: string, 
             street: string, 
             postcode: string, 
             city: string } = {
     number: '',
     street: '',
     postcode: '',
     city: '',
  }
  
allInfos = Object.assign (this.infos, this.address)

}