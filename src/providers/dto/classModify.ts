import { Injectable } from '@angular/core';

@Injectable()

export class ClassModify {
    
  allInfos: { uuid: string,
           firstName: string, 
           lastName: string, 
           phone: string, 
           email: string,
           latitude: string, 
           longitude: string, 
           distance: string,
           status: string, 
           address: string } = {
    uuid: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    latitude: '',
    longitude: '',
    distance: '',
    status: '',
    address: '',
   };
}