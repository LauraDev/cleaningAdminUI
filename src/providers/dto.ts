import { Injectable } from '@angular/core';
import {UUID} from 'angular2-uuid';

@Injectable()

export class DTO {
  
  constructor(
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string, 
    number: string, 
    street: string, 
    postcode: string, 
    city: string, 
    uuid: string, 
    status: number, 
    latitude: string, 
    longitude: string, 
    distance: number)

    {
    firstName = ''; 
    lastName = ''; 
    phone = ''; 
    email = ''; 
    number = ''; 
    street = ''; 
    postcode = ''; 
    city = ''; 
    uuid = UUID.UUID(); 
    status = 0; 
    latitude = ''; 
    longitude = ''; 
    distance = 5; 
    };
  }