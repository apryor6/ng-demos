import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlternativeDataService {
  constructor() {
    console.log('AlternativeDataService created');
  }
  getData() {
    console.log('* ~~ * fancy get data');
  }
}
