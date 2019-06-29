import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'demo-radio-btn-grp',
  templateUrl: './radio-btn-grp.component.html',
  styleUrls: ['./radio-btn-grp.component.css']
})
export class RadioButtonGroupComponent implements OnInit {
  selected: string;

  @Input() sel_id: string;
  constructor() {}

  ngOnInit() {}

  setValue(value: string) {
    console.log(`value = ${value}`);
    this.selected = value;
  }
}
