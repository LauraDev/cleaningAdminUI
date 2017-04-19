import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BackendWs {
  backendWsUrl=  'http://localhost:3000/cleaners/db';
  backendWsUrl2= 'http://localhost:3000/cleaners/delete';
  backendWsUrl3= 'http://localhost:3000/cleaners/geocode';

  constructor(public http: Http) {
  }

   public list(): Promise<Array<Object>>{
    // return new Promise((resolve, reject) => resolve('ok'));
    return new Promise(resolve => {
      this.http.get(this.backendWsUrl)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
     });
   }

   public write(value: string): Promise<string>{
    // return new Promise((resolve, reject) => resolve('ok'));
    return new Promise(resolve => {

      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      let options = new RequestOptions({ headers: headers });
      this.http.post(this.backendWsUrl, value, options)
        .subscribe(data => {
          resolve(data);
        });
    });
   }

   public dash(value: string): Promise<string>{
    // return new Promise((resolve, reject) => resolve('ok'));
    return new Promise(resolve => {

      let headers = new Headers({
        'Content-Type': 'application/json', 
        });
      let options = new RequestOptions({ headers: headers });
      this.http.post(this.backendWsUrl2 , value , options)
        .subscribe(data => {
          resolve(data);
        });
    });
   }

   public goecReq(value: string): Promise<string>{
    // return new Promise((resolve, reject) => resolve('ok'));
    return new Promise(resolve => {

      let headers = new Headers({
        'Content-Type': 'application/json', 
      });
      let options = new RequestOptions({ headers: headers });
      this.http.post(this.backendWsUrl3 , value , options)
        .subscribe(data => {
          resolve(data);
        });
    });
   }

   public geocRes(): Promise<Array<Object>>{
    // return new Promise((resolve, reject) => resolve('ok'));
    return new Promise(resolve => {
      this.http.get(this.backendWsUrl3)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
    }
   } 