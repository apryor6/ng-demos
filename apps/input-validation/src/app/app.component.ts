import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value1 = '1';
  value2 = '2';
  value3 = '3';
  _value4 = '4';
  value5 = '5';
  value6 = '6';
  value7 = '7';

  get value4() {
    return this._value4;
  }
  set value4(str: string) {
    this._value4 = this.removeVowels(str);
  }
  title = 'input-validation';

  removeVowels(str: string): string {
    return str.replace(/[aeiou]/gi, '');
  }

  constructor() {}
}
