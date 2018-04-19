import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
* Gestion des interactions avec la BlockChain
*/
@Injectable()
export class DckProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DckProvider Provider');
  }

}
