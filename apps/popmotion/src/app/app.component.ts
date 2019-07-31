import { Component, OnInit } from '@angular/core';
import { easing, tween, styler } from 'popmotion';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'popmotion';

  ngOnInit() {}

  onClick() {
    const divStyler = styler(document.querySelector('.box'));

    tween({
      from: 0,
      to: { x: 300, rotate: 180 },
      duration: 1000,
      ease: easing.backOut,
      flip: 1
    }).start(divStyler.set);
  }
}
