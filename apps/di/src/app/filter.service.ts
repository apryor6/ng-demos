import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private ds: DataService) {
    console.log('FilterService created with data service', this.ds);
  }
}
