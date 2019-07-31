import {
  Directive,
  ElementRef,
  HostListener,
  AfterViewInit,
  Input,
  Self,
  AfterContentInit,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[removeVowels]',
  exportAs: 'removeVowels'
})
export class RemoveVowelDirective implements OnInit {
  internalValue = '';

  @Input()
  overwrite: boolean = false;

  @Input()
  value: string = '';

  @HostListener('input', ['$event.target.value'])
  syncValue(str: string) {
    this.internalValue = this.removeVowels(str);
    if (this.overwrite) {
      this.el.nativeElement.value = this.internalValue;
    }
  }

  ngOnInit() {
    this.internalValue = this.value;
    this.el.nativeElement.value = this.value;
  }

  removeVowels(str: string): string {
    return str.replace(/[aeiou]/gi, '');
  }

  constructor(@Self() private el: ElementRef) {}
}
