import { Injectable } from '@angular/core';
import {UUID} from 'angular2-uuid';

@Injectable()

export class ClassCleaner {
    
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
    uuid: UUID.UUID(),
    firstName: 'Luc',
    lastName: 'T',
    phone: '6000000000',
    email: 'rf@mail.fr',
    latitude: '',
    longitude: '',
    distance: '5',
    status: '0',
    address: '1 main st ottawa',
    };
}