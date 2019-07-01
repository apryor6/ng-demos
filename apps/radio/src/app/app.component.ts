import { Component, ViewChild } from '@angular/core';
import { RadioButtonGroupComponent } from './radio/radio-btn-grp/radio-btn-grp.component';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RadioButtonGroupComponent) radioA: RadioButtonGroupComponent;
  title = 'radio';
}
