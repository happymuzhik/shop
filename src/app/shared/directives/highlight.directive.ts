import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#F00', '#FFF');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(bgColor: string, color: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = color;
  }
}
