import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value1 = 'value1';
  value2 = 'value2';
  value3 = 'value3';
  _value4 = 'value4';
  value5 = 'value5';
  value6 = 'value6';
  value7 = 'value7';

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
