import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'button'
})
export class RippleDirective {
  @HostListener('click', ['$event'])
  toggle(e: MouseEvent) {
    const node = document.createElement('div');
    node.className = 'circle zoom';
    const x = e.offsetX - 25;
    const y = e.offsetY - 25;
    node.style.top = `${y}px`;
    node.style.left = `${x}px`;
    this.el.nativeElement.appendChild(node);
    setTimeout(() => {
      this.el.nativeElement.removeChild(node);
    }, 4900);
  }
  constructor(private el: ElementRef) {}
}
