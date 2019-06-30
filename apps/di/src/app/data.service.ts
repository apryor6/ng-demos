import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
    console.log('DataService created');
  }
  getData() {
    console.log('get data');
  }
}
