import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list_item.html',
})
export class ListItemSchedule {
  @Input() text: string = '';
  private timer: any;
  loading: boolean = false;
  @ViewChild('more') moreElement!: ElementRef;
  @ViewChild('archive') archiveElement!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  init(id: string) {
    if (!this.loading) {
      this.loading = true;
      let element: ElementRef;
      if (id == 'more') {
        element = this.moreElement;
      } else {
        element = this.archiveElement;
      }
      this.timer = setTimeout(() => {
        this.renderer.removeClass(element.nativeElement, 'hidden');
        this.loading = false;
      }, 900);
    }
  }

  reset(id: string) {
    this.loading = false;
    let element: ElementRef;
    if (id == 'more') {
      element = this.moreElement;
    } else {
      element = this.archiveElement;
    }
    clearTimeout(this.timer);
    this.renderer.addClass(element.nativeElement, 'hidden');
  }
}
