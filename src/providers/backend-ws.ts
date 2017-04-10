import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BackendWs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BackendWs {
  backendWsUrl= 'http://localhost:3000/cleaners';

  constructor(public http: Http) {
    // console.log('Hello BackendWs Provider');
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


}