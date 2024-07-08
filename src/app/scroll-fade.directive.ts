// scroll-fade.directive.ts
import { Directive, ElementRef, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollFade]'
})
export class ScrollFadeDirective implements OnDestroy, AfterViewInit {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Adjust the threshold value as needed
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
