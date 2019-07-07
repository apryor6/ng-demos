import { WrapperComponent } from './wrapper/wrapper.component';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[demoHighlight]',
  host: { '(mouseleave)': 'onMouseExit($event)' }
})
export class HighlightDirective {
  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    console.log('onMouseEnter: ', event);

    // Perhaps there is a way to access the ElementRef of the outer component directly
    // instead of going through some of its public API
    this.wrapper.highlight('cyan');
  }

  constructor(private wrapper: WrapperComponent) {}
  onMouseExit(event: MouseEvent) {
    console.log('onMouseExit: ', event);
    console.log('this.wrapper = : ', this.wrapper);
    this.wrapper.highlight('cornflowerblue');
  }
}
