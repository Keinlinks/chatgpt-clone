import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
})
export class Header {
  menu_open: boolean = false;
  private clickListener!: () => void;

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  open_popup() {
    this.menu_open = !this.menu_open;
    this.clickListener = this.renderer.listen(
      'document',
      'click',
      (event: Event) => {
        const clickedInside = this.el.nativeElement.contains(event.target);
        if (!clickedInside) {
          this.menu_open = false;
          this.clickListener();
        }
      }
    );
  }
}
