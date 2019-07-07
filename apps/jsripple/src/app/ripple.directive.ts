import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'button'
})
export class RippleDirective {
  @HostListener('click', ['$event'])
  toggle(e: MouseEvent) {
    const node = document.createElement('div');
    node.className = 'circle zoom';
    const offsetTop = this.el.nativeElement.offsetTop;
    const offsetLeft = this.el.nativeElement.offsetLeft;
    const x = e.pageX - offsetLeft - 25;
    const y = e.pageY - offsetTop - 25;
    node.style.top = `${y}px`;
    node.style.left = `${x}px`;
    this.el.nativeElement.appendChild(node);
    setTimeout(() => {
      this.el.nativeElement.removeChild(node);
    }, 400);
  }
  constructor(private el: ElementRef) {}
}
