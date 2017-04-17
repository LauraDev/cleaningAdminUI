import { Injectable } from '@angular/core';
import {UUID} from 'angular2-uuid';

@Injectable()

export class ClassCleaner {
    
  infos: { uuid: string,
           firstName: string, 
           lastName: string, 
           phone: string, 
           email: string,
           latitude: string, 
           longitude: string, 
           distance: string,
           status: string, } = {
    uuid: UUID.UUID(),
    firstName: 'Luc',
    lastName: 'T',
    phone: '6000000000',
    email: 'rf@mail.fr',
    latitude: '',
    longitude: '',
    distance: '5',
    status: '0',
   };

   address: { number: string, 
             street: string, 
             postcode: string, 
             city: string } = {
     number: '1',
     street: 'main street',
     postcode: 'f1',
     city: 'ottawa',
  }
  
allInfos = Object.assign (this.infos, this.address)


}