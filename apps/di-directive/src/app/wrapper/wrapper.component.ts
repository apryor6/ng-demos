import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'demo-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {}

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
