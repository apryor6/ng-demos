import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'button'
})
export class RippleDirective {
  animate = false;
  @HostBinding('class.zoom')
  get zoom() {
    return this.animate;
  }

  @HostListener('click')
  toggle() {
    this.animate = !this.animate;
    setTimeout(() => {
      this.animate = !this.animate;
    }, 1000);
  }
  constructor() {}
}
