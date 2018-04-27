import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
/**
 * Adds CSS class "open" to an element if hovered with mouse.
 */
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
